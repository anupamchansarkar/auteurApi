use auteur;

CREATE TABLE `applications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` char(32) NOT NULL DEFAULT '',
  `client_secret` char(32) NOT NULL DEFAULT '',
  `grant_type` enum('AUTHORIZATION_CODE','IMPLICIT','RESOURCE_OWNER','CLIENT_CREDENTIALS') NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(64) NOT NULL,
  `name` varchar(100) NOT NULL,
  `internal` tinyint(1) NOT NULL DEFAULT '0' COMMENT '	',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created` int(10) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `applications_client_id` (`client_id`),
  KEY `applications_client_secret` (`client_secret`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `applications` (`id`, `client_id`, `client_secret`, `grant_type`, `email`, `password`, `name`, `internal`, `active`, `created`, `updated`)
VALUES
	(1, '71161ef48ff26095ba10341a6640928f', '10162c9585396753293a3373b2cbc9f5', 'RESOURCE_OWNER', 'anupamchansarkar@hotmail.com', '', 'Web Application', 1, 1, 1554943339, 1554943339);
