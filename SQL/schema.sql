CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(50) NULL DEFAULT 'anonymous',
  `id_room` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Friends'
--
-- ---

DROP TABLE IF EXISTS `Friends`;

CREATE TABLE `Friends` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_source` INTEGER NULL DEFAULT NULL,
  `id_target` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(500) NULL DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `id_roomname` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
--
-- ---

DROP TABLE IF EXISTS `Rooms`;

CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(50) NULL DEFAULT 'New Room',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Users` ADD FOREIGN KEY (id_room) REFERENCES `Rooms` (`id`);
ALTER TABLE `Friends` ADD FOREIGN KEY (id_source) REFERENCES `Users` (`id`);
ALTER TABLE `Friends` ADD FOREIGN KEY (id_target) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (id_user) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (id_roomname) REFERENCES `Rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`name`,`id_room`) VALUES
-- ('','','');
-- INSERT INTO `Friends` (`id`,`id_source`,`id_target`) VALUES
-- ('','','');
-- INSERT INTO `Messages` (`id`,`text`,`id_user`,`date`,`id_roomname`) VALUES
-- ('','','','','');
-- INSERT INTO `Rooms` (`id`,`roomname`) VALUES
-- ('','');












/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




