use auteur;

CREATE TABLE `price` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `option` char(40) NOT NULL,
  `created` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `price_users` (`user_id`),
  KEY `price_created` (`created`),
  KEY `price_option` (`option`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;