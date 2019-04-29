use auteur;

CREATE TABLE `user_folders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `unique_id` char(40) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created` int(10) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  `application_id` int(10) unsigned NOT NULL,
  `parent_id` bigint(20) unsigned DEFAULT NULL,
  `is_system` tinyint(1) NOT NULL DEFAULT '0',
  `permissions` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`unique_id`),
  KEY `uf_application_id` (`application_id`),
  KEY `uf_permissions` (`permissions`),
  KEY `uf_parent_id` (`parent_id`),
  KEY `uf_created` (`created`),
  KEY `uf_is_system` (`is_system`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;