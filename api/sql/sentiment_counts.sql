use auteur;

CREATE TABLE `sentiment_counts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `script_id` bigint(20) unsigned NOT NULL,
  `time` bigint(10) unsigned NOT NULL,
  `limit` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `sentiment_counts_script_id` (`script_id`),
  KEY `sentiment_counts_time` (`time`)
) ENGINE=InnoDB CHARSET=utf8;