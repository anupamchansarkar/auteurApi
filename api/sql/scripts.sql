use auteur;

CREATE TABLE `scripts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `unique_id` char(40) NOT NULL,
  `script_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `file_type` tinyint(3) unsigned NOT NULL,
  `page_count` smallint(5) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  `created` int(10) unsigned NOT NULL,
  `application_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_unique_id` (`unique_id`),
  KEY `scripts_users` (`user_id`),
  KEY `scripts_created` (`created`),
  KEY `scripts_script_name` (`script_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;