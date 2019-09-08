use auteur;

CREATE TABLE `genres` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `avg_scenes` float(8,5) NOT NULL DEFAULT '0.00000',
  `avg_dialog_scene_ratio` float(8,5) NOT NULL DEFAULT '0.00000',
  `avg_scene_description_length` float(8,5) NOT NULL DEFAULT '0.00000',
  `avg_dialog_length` float(8,5) NOT NULL DEFAULT '0.00000',
  `avg_page_count` float(8,5) NOT NULL DEFAULT '0.00000',
  `avg_location_count` float(8,5) NOT NULL DEFAULT '0.00000',
  PRIMARY KEY (`id`),
  KEY `genres_genre` (`genre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;