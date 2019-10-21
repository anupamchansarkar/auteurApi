use auteur;


CREATE TABLE `sentiment_count_limits` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `sentiment_limit` tinyint(3) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `sentiment_counts_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
