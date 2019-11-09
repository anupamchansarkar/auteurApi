use auteur;

CREATE TABLE `registration_source` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `source` char(40) NOT NULL,
  `created` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `registration_source_users` (`user_id`),
  KEY `scripts_created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;