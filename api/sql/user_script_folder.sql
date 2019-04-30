use auteur;

CREATE TABLE `user_script_folders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `script_id` bigint(20) unsigned NOT NULL,
  `user_folder_id` bigint(20) unsigned NOT NULL,
  `application_id` int(10) unsigned NOT NULL,
  `permissions` tinyint(3) unsigned NOT NULL,
  `created` int(10) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `use_user_id` (`user_id`),
  KEY `usf_script_id` (`script_id`),
  KEY `usf_user_folder_id` (`user_folder_id`),
  KEY `usf_created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;