use auteur;

CREATE TABLE `oauths` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `application_id` int(10) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `access_code` char(64) DEFAULT NULL,
  `access_token` char(64) DEFAULT NULL,
  `refresh_token` char(64) DEFAULT NULL,
  `scope` varchar(5000) DEFAULT NULL,
  `expires_on` int(10) unsigned NOT NULL,
  `created` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `oauthsapplications` (`application_id`),
  KEY `oauths_users` (`user_id`),
  KEY `oauths_refresh_token` (`refresh_token`),
  KEY `oauths_access_code` (`access_code`),
  KEY `oauths_access_token` (`access_token`),
  KEY `oauths_scope` (`scope`(255)),
  KEY `oauths_created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;