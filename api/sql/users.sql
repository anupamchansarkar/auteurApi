use auteur;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `unique_id` char(32) NOT NULL,
  `first_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '' COMMENT '	',
  `last_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `password` char(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `salt` char(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created` int(10) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `index_unique_id` (`unique_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;