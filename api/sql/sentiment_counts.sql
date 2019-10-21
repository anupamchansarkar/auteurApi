use auteur;

CREATE TABLE `sentiment_counts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `created` bigint(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sentiment_counts_user_id` (`user_id`),
  KEY `sentiment_counts_created` (`created`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;