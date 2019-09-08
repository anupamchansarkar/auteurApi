from optparse import OptionParser
import json

KEYWORDS = ['AERIAL', 'ANGLE', 'BACK','CLOSE', 'CLOSER', 'CONTINUOUS', 'CONTRAZOOM', 'CRAWL', 'CROSSFADE', 'CUT', 'DISSOLVE', 'ESTABLISHING', 'EXT.', 'EXTREMELY', 'FADE',
            'FAVOR', 'FLASH', 'FLASHBACK', 'FREEZE', 'FRAME', 'IN', 'INSERT', 'INT.', 'INTERCUT', 'INTO', 'VIEW', 'JUMP', 'LONG', 'LAP', 'MATCH', 'MOS', 'ON', 'O.C.', 'O.S.',
            'POV', 'PULL', 'PUSH', 'REVERSE', 'SMASH', 'SPLIT', 'SCREEN', 'SHOT', 'STOCK', 'SUPER', 'TO', 'TIGHT', 'TIME', 'V.O.', 'WIPE', 'ZOOM', 'EXT/INT.', 'INT/EXT.',
            'EXT/INT', 'INT/EXT']

EDITWORDS = ['FADE', 'CRAWL', 'FLASHBACK', 'DISSOLVE', 'QUICK', 'JUMP', 'CUT', 'ESTABLISHING', 'CROSSFADE', 'INSERT', 'INTO', 'LAP', 'MATCH', 'INTERCUT', 'MOS', 'SMASH', 'SPLIT', 
             'STOCK', 'SUPER', 'TIGHT', 'TIME', 'V.O.', 'WIPE', 'A']

CAMERAWORDS = ['AERIAL', 'ANGLE', 'CLOSE', 'CLOSEUP', 'CLOSER', 'EXTREMELY', 'LONG', 'SHOT', 'FAVOR', 'FLASH', 'FREEZE', 'FRAME', 'O.C.', 'O.S.', 'POV', 'PULL', 'FOCUS', 'PUSH', 'REVERSE', 'ZOOM', 'ON']

LOCATIONWORDS = ['INT.', 'EXT.', 'DAY', 'NIGHT', 'EXT/INT', 'INT/EXT', 'EXT/INT.', 'INT/EXT.']

class ScriptParser:

    def __init__(self):
        self.inputfile = None
        self.outputfile = None
        self.csvfile = None
        self.fp = None
        self.edit_desc = []
        self.camera_desc = []
        self.location_desc = []
        self.location_count = 0
        self.scene_desc = []
        self.scenes = []
        self.scene_count = 0
        self.scenes_by_char = []
        self.dialog = []
        self.characters = []
        self.lines_by_char = []
        self.unprocessed = []
        self.csv_lines = []
        self.line_count = 0
        self.longest_scene = []
        self.longest_location = []
        self.longest_monolog = {}
        self.overly_used_words = []

    def process_line(self, line):
        if line.strip() == '':
            return '', [], 0
        spaces = len(line) - len(line.lstrip())
        line = line.strip()
        words = line.split(' ')
        words[0] = words[0].rstrip(':')
        if words[0].isdigit():
            words = words[1:]
        new_words = []
        for w in words:
            if w != '':
                new_words.append(w)
        self.line_count += 1
        new_line = ' '.join(new_words)
        return new_line, new_words, spaces

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
                new_line, words, spaces = self.process_line(line)
            
                # check the 1st word and see where it fits
                if words and words[0] in EDITWORDS:
                    self.save_edit_desc(new_line, words, spaces)
                elif words and words[0] in CAMERAWORDS:
                    self.save_camera_desc(new_line, words, spaces)
                elif words and words[0] in LOCATIONWORDS:
                    self.location_count += 1
                    self.save_location_desc(new_line, words, spaces)
                elif words and not new_line.isupper():
                    self.scene_count += 1
                    self.save_scene_desc(new_line, words, spaces)
                elif words and new_line.isupper():
                    self.save_dialogs(new_line, words, spaces)
                elif words:
                    self.save_unprocessed_lines(new_line, words, spaces)
                prev_spaces = spaces

        self.run_counts()
        self.write_output()

    def run_counts(self):
        # Count scenes lengths
        self.total_scenes = len(self.scene_desc)

        # avg scene length
        scene_line_count = 0
        for scene in self.scene_desc:
            scene_line_count += scene['sce_desc_len']
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

        # lines by char, scenes by char, longest monolog, overly used words 
        lines_by_char_dict = {}
        scenes_by_char_dict = {}
        overly_used_words_dict = {}
        for dialog in self.dialog:
            # lines by char
            if dialog['char'] not in lines_by_char_dict.keys():
                lines_by_char_dict[dialog['char']] = dialog['dia_len']
            else:
                lines_by_char_dict[dialog['char']] = lines_by_char_dict[dialog['char']] + dialog['dia_len']
            # scenes by char
            if dialog['char'] not in scenes_by_char_dict.keys():
                scenes_by_char_dict[dialog['char']] = [dialog['scene_num']]
            else:
                if dialog['scene_num'] not in scenes_by_char_dict[dialog['char']]:
                    scenes_by_char_dict[dialog['char']].append(dialog['scene_num'])
            # longest dialog
            if not bool(self.longest_monolog):
                self.longest_monolog = dialog
            elif dialog['dia_len'] > self.longest_monolog['dia_len']:
                self.longest_monolog = dialog
            # overly used words
            '''words = dialog['text'].split(' ')
            for w in words:
                w = w.lower()
                if w in overly_used_words_dict.keys():
                    overly_used_words_dict[w] = overly_used_words_dict[w] + 1
                else:
                    overly_used_words_dict[w] = 1'''

        for char in scenes_by_char_dict.keys():
            self.scenes_by_char.append([char, len(scenes_by_char_dict[char])])
        self.scenes_by_char.sort(key = lambda x: x[1], reverse=True)

        for k in lines_by_char_dict.keys():
            self.lines_by_char.append([k, lines_by_char_dict[k]])
        self.lines_by_char.sort(key = lambda x: x[1], reverse=True)

        '''for k in overly_used_words_dict.keys():
            self.overly_used_words.append([k, overly_used_words_dict[k]])
        self.overly_used_words.sort(key = lambda x: x[1], reverse=True)'''

        # longest running scenes
        longest_scene_length = 0
        scene_number = 0
        prev_scene = self.scene_desc[0]
        for i in range(1, len(self.scene_desc)):
            if self.scene_desc[i]['ln'] - prev_scene['ln'] > longest_scene_length:
                longest_scene_length = self.scene_desc[i]['ln'] - prev_scene['ln']
                scene_number = prev_scene['scene_count']
                scene_text = prev_scene['text']
            prev_scene = self.scene_desc[i]
        self.longest_scene = [scene_number, longest_scene_length, scene_text]

        # longest running location
        longest_location_length = 0
        location_number = ''
        prev_location = self.location_desc[0]
        for i in range(1, len(self.location_desc)):
            if (self.location_desc[i]['ln'] - prev_location['ln']) > longest_location_length:
                longest_location_length = self.location_desc[i]['ln'] - prev_location['ln']
                location_number = prev_location['text']
            prev_location = self.location_desc[i]
        self.longest_location = [location_number, longest_location_length]

    def write_output(self):
        f = open(self.outputfile, 'w')
        data = {"total_scenes":self.total_scenes, "avg_scene_desc_length":self.avg_scene_desc_length, 
                "total_dialogs":self.total_dialogs, "avg_dialog_length":self.avg_dialog_length, 
                "dialog_scene_ratio":self.dialog_scene_ratio, "total_locations":self.count_location_descrption,
                "lines_by_char": self.lines_by_char, "scenes_by_char":self.scenes_by_char, "longest_scene":self.longest_scene,
                "longest_location": self.longest_location, "longest_monolog": self.longest_monolog,
                "overly_used_words": self.overly_used_words}
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
        self.csv_lines.append("%s, %s, %s, %s\n" %(self.line_count, csv_line, "location_description", self.location_count))
        self.location_desc.append({"text":line, "ln":self.line_count, "location_count":self.location_count})
    
    def save_unprocessed_lines(self, line, words, spaces):
        csv_line = line.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s\n" %(self.line_count, csv_line, "unprocessed"))
        self.unprocessed.append({"text":line, "ln":self.line_count})

    def save_scene_desc(self, input_line, input_words, input_spaces):
        scene_start = self.line_count
        cur_scene = input_line
        scene_desc_length = 1
        pos = self.fp.tell()
        line = self.fp.readline()
        line, words, spaces = self.process_line(line)
        scene_desc_length += 1
        while ((spaces - input_spaces < 3) and (len(words) != 0)):
            if words:
                cur_scene = "%s %s" % (cur_scene, line)
            pos = self.fp.tell()
            line = self.fp.readline()
            line, words, spaces = self.process_line(line)
            scene_desc_length += 1

        csv_line = cur_scene.strip('\n')
        csv_line = csv_line.strip('\r')
        csv_line = csv_line.replace(',',':')
        self.csv_lines.append("%s, %s, %s, %s, %s\n" %(scene_start, csv_line, "scene_description", scene_desc_length-1, self.scene_count))
        self.scene_desc.append({"text":cur_scene, "ln":scene_start, "sce_desc_len":scene_desc_length-1, "scene_count":self.scene_count})
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
        self.csv_lines.append("%s, %s, %s, %s, %s, %s, %s\n" %(dialog_start, csv_line, "dialog", dialog_length-1, char, self.scene_count, self.location_count))
        self.dialog.append({"text":cur_dialog, "ln":dialog_start, "dia_len":dialog_length-1, "char":char, "scene_num":self.scene_count, "loc_count":self.location_count})

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
