use auteur;

CREATE TABLE `script_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `script_id` bigint(20) unsigned NOT NULL,
  `genre_id` bigint(20) unsigned NOT NULL ,
  PRIMARY KEY (`id`),
  KEY `scripts_details_script_id` (`script_id`),
  KEY `scripts_details_genre_id` (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;