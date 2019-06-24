from optparse import OptionParser
import json

KEYWORDS = ['AERIAL', 'ANGLE', 'BACK','CLOSE', 'CLOSER', 'CONTINUOUS', 'CONTRAZOOM', 'CRAWL', 'CROSSFADE', 'CUT', 'DISSOLVE', 'ESTABLISHING', 'EXT.', 'EXTREMELY', 'FADE',
            'FAVOR', 'FLASH', 'FLASHBACK', 'FREEZE', 'FRAME', 'IN', 'INSERT', 'INT.', 'INTERCUT', 'INTO', 'VIEW', 'JUMP', 'LONG', 'LAP', 'MATCH', 'MOS', 'ON', 'O.C.', 'O.S.',
            'POV', 'PULL', 'PUSH', 'REVERSE', 'SMASH', 'SPLIT', 'SCREEN', 'SHOT', 'STOCK', 'SUPER', 'TO', 'TIGHT', 'TIME', 'V.O.', 'WIPE', 'ZOOM']

EDITWORDS = ['FADE', 'CRAWL', 'FLASHBACK', 'DISSOLVE', 'QUICK', 'JUMP', 'CUT', 'ESTABLISHING', 'CROSSFADE', 'INSERT', 'INTO', 'LAP', 'MATCH', 'INTERCUT', 'MOS', 'SMASH', 'SPLIT', 
             'STOCK', 'SUPER', 'TIGHT', 'TIME', 'V.O.', 'WIPE', 'A']

CAMERAWORDS = ['AERIAL', 'ANGLE', 'CLOSE', 'CLOSEUP', 'CLOSER', 'EXTREMELY', 'LONG', 'SHOT', 'FAVOR', 'FLASH', 'FREEZE', 'FRAME', 'O.C.', 'O.S.', 'POV', 'PULL', 'FOCUS', 'PUSH', 'REVERSE', 'ZOOM', 'ON']

LOCATIONWORDS = ['INT.', 'EXT.', 'DAY', 'NIGHT']

class ScriptParser:

    def __init__(self):
        self.inputfile = None
        self.outputfile = None
        self.csvfile = None
        self.fp = None
        self.edit_desc = []
        self.camera_desc = []
        self.location_desc = []
        self.scene_desc = []
        self.dialog = []
        self.characters = []
        self.unprocessed = []
        self.csv_lines = []
        self.line_count = 0

    def process_line(self, line):
        if line.strip() == '':
            return '', [], 0
        spaces = len(line) - len(line.lstrip())
        line = line.strip()
        words = line.split(' ')
        words[0] = words[0].rstrip(':')
        if words[0].isdigit():
            words = words[1:]
        self.line_count += 1
        return line, words, spaces

    def find_start_line(self):
        start = False
        while not start:
            pos = self.fp.tell()
            line = self.fp.readline()
            line, words, spaces = self.process_line(line)
            
            if words and words[0] in KEYWORDS:
                # found first line
                start = False
                self.fp.seek(pos)
                # decrement line count
                self.line_count -= 1
                return spaces

    def main(self, inputfile, outputfile, csvfile):
        self.inputfile = inputfile
        self.outputfile = outputfile
        self.csvfile = csvfile
        with open(self.inputfile) as self.fp:
            # find the 1st valid line
            self.default_spaces = self.find_start_line()
            prev_spaces = 0
            while True:
                line = self.fp.readline()
                if len(line) == 0:
                    break
                line, words, spaces = self.process_line(line)
            
                # check the 1st word and see where it fits
                if words and words[0] in EDITWORDS:
                    self.save_edit_desc(line, words, spaces)
                elif words and words[0] in CAMERAWORDS:
                    self.save_camera_desc(line, words, spaces)
                elif words and words[0] in LOCATIONWORDS:
                    self.save_location_desc(line, words, spaces)
                elif words and not line.isupper():
                    self.save_scene_desc(line, words, spaces)
                elif words and line.isupper():
                    self.save_dialogs(line, words, spaces)
                elif words:
                    self.save_unprocessed_lines(line, words, spaces)
                prev_spaces = spaces

        self.run_counts()
        self.write_output()

    def run_counts(self):
        # Count scenes lengths
        self.total_scenes = len(self.scene_desc)

        # avg scene length
        scene_line_count = 0
        for scene in self.scene_desc:
            scene_line_count += scene['sce_len']
        self.avg_scene_desc_length = float(scene_line_count)/self.total_scenes

        # count dialogs
        self.total_dialogs = len(self.dialog)

        # avg dialog length
        dialog_line_count = 0
        for dialog in self.dialog:
            dialog_line_count += dialog['dia_len']

        self.avg_dialog_length = float(dialog_line_count)/self.total_dialogs
        self.dialog_scene_ratio = float(dialog_line_count)/scene_line_count
        self.count_location_descrption = len(self.location_desc) 

    def write_output(self):
        f = open(self.outputfile, 'w')
        data = {"total_scenes":self.total_scenes, "avg_scene_desc_length":self.avg_scene_desc_length, "total_dialogs":self.total_dialogs, 
                "avg_dialog_length":self.avg_dialog_length, "dialog_scene_ratio":self.dialog_scene_ratio, "total_scenes":self.count_location_descrption}
        f.write(json.dumps(data))
        f.write('\n\n\n\n\n\n')
        f.write('----------CAMERA DESC-------------------------\n')
        f.write(json.dumps(self.camera_desc))
        f.write('\n\n\n\n\n\n')
        f.write('----------EDIT DESC-------------------------\n')
        f.write(json.dumps(self.edit_desc))
        f.write('\n\n\n\n\n\n')
        f.write('----------LOCATION DESC-------------------------\n')
        f.write(json.dumps(self.location_desc))
        f.write('\n\n\n\n\n\n')
        f.write('----------SCENE DESC-------------------------\n')
        f.write(json.dumps(self.scene_desc))
        f.write('\n')
        f.write('\n\n\n\n\n\n')
        f.write('----------DIALOG-------------------------\n')
        f.write(json.dumps(self.dialog))
        f.write('\n\n\n\n\n\n')
        f.write('----------CHARACTERS-------------------------\n')
        f.write(json.dumps(self.characters))
        f.write('\n')
        f.close()

        if self.csvfile:
            f = open(self.csvfile, 'w')
            f.write('line, text, description, length, char\n')
            for l in self.csv_lines:
                f.write(l)
            f.close()

        

    def save_edit_desc(self, line, words, spaces):
        # check if the A card is palces correctly if not send this to scene description
        if words[0] == 'A' and 'card' not in line.lower():
            self.save_scene_desc(line, words, spaces)
            return
        csv_line = line.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s\n" %(self.line_count, csv_line, "edit_description"))
        self.edit_desc.append({"text":line, "ln":self.line_count})

    def save_camera_desc(self, line, words, spaces):
        csv_line = line.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s\n" %(self.line_count, csv_line, "camera_description"))
        self.camera_desc.append({"text":line, "ln":self.line_count})

    def save_location_desc(self, line, words, spaces):
        csv_line = line.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s\n" %(self.line_count, csv_line, "location_description"))
        self.location_desc.append({"text":line, "ln":self.line_count})
    
    def save_unprocessed_lines(self, line, words, spaces):
        csv_line = line.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s\n" %(self.line_count, csv_line, "unprocessed"))
        self.unprocessed.append({"text":line, "ln":self.line_count})

    def save_scene_desc(self, input_line, input_words, input_spaces):
        scene_start = self.line_count
        cur_scene = input_line
        scene_length = 1
        pos = self.fp.tell()
        line = self.fp.readline()
        line, words, spaces = self.process_line(line)
        scene_length += 1
        while ((spaces - input_spaces < 3) and (len(words) != 0)):
            if words:
                cur_scene = "%s %s" % (cur_scene, line)
            pos = self.fp.tell()
            line = self.fp.readline()
            line, words, spaces = self.process_line(line)
            scene_length += 1

        csv_line = cur_scene.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s, %s\n" %(scene_start, csv_line, "scene_description", scene_length-1, ))
        self.scene_desc.append({"text":cur_scene, "ln":scene_start, "sce_len":scene_length-1})
        self.fp.seek(pos)

    def save_dialogs(self, input_line, input_words, input_spaces):
        if input_line not in self.characters:
            self.characters.append(input_line)
        dialog_start = self.line_count
        char = input_line
        line = self.fp.readline()
        line, words, spaces = self.process_line(line)
        dialog_length = 1
        cur_dialog = ''
        while ((spaces - input_spaces < 3) and (len(words) != 0)):
            if words:
                cur_dialog = "%s %s" % (cur_dialog, line)
            pos = self.fp.tell()
            line = self.fp.readline()
            line, words, spaces = self.process_line(line)
            dialog_length += 1
        csv_line = cur_dialog.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s, %s, %s\n" %(dialog_start, csv_line, "dialog", dialog_length-1, char))
        self.dialog.append({"text":cur_dialog, "ln":dialog_start, "dia_len":dialog_length-1, "char":char})


def parse_options():

    usage = "Usage: script.py --input <file> --output <file>"
    parser = OptionParser(usage)
    parser.add_option("-o", "--output",
                       action="store", type="string", dest="outputfile", default=None)
    parser.add_option("-f", "--input",
                      action="store", type="string", dest="inputfile", default=None)
    parser.add_option("-c", "--csv",
                      action="store", type="string", dest="csvfile", default=None)
    (options, args) = parser.parse_args()                            

    if options.inputfile and options.outputfile:
        scriptparser_obj = ScriptParser()

        scriptparser_obj.main(
            options.inputfile,
            options.outputfile,
            options.csvfile
        )
    else:
        print("ERROR -- Expected Arguments not given! \nUsage: script.py --input <file> --output <file>")

if __name__ == "__main__":
    parse_options()
