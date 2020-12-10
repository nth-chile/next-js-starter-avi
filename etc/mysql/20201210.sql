CREATE DATABASE  IF NOT EXISTS `klpdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `klpdb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: ls-1faa861fd5dd85828ac864f55522bbfe23ff80a9.cp2vubgbwlri.us-east-1.rds.amazonaws.com    Database: klpdb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `entries`
--

DROP TABLE IF EXISTS `entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `landingpage`
--

DROP TABLE IF EXISTS `landingpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landingpage` (
  `landingpage_id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Missing Nickname',
  `headline` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Headline Goes Here',
  `subheadline` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Lengthy Description Goes Here',
  `ctatext` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Get Started',
  `ctaurl` varchar(255) DEFAULT NULL,
  `ctasurvey` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `statviews` int NOT NULL DEFAULT '0',
  `statctaclicks` int NOT NULL DEFAULT '0',
  `statsurveysaves` int NOT NULL DEFAULT '0',
  `pagetags` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `team_id` bigint DEFAULT NULL,
  `logourl` varchar(255) DEFAULT NULL,
  `bgurl` varchar(255) DEFAULT NULL,
  `googleanalyticsid` varchar(255) DEFAULT NULL,
  `klpbranding` int DEFAULT '1',
  `pageurl` varchar(45) NOT NULL,
  `crdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '1',
  `thumburl` varchar(255) DEFAULT NULL,
  `bol_delete` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`landingpage_id`),
  UNIQUE KEY `pageurl` (`pageurl`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` bigint NOT NULL AUTO_INCREMENT,
  `team_name` varchar(54) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `team_status` int DEFAULT '1',
  `crdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sum_landingpages` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`team_id`),
  UNIQUE KEY `teamid_UNIQUE` (`team_id`),
  KEY `user_id_idx` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_billing`
--

DROP TABLE IF EXISTS `team_billing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_billing` (
  `team_billing_id` int NOT NULL AUTO_INCREMENT,
  `team_id` int DEFAULT NULL,
  `crdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` varchar(45) DEFAULT NULL,
  `frequency` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`team_billing_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_user`
--

DROP TABLE IF EXISTS `team_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_user` (
  `team_user_id` bigint NOT NULL AUTO_INCREMENT,
  `team_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`team_user_id`),
  UNIQUE KEY `team_userid_UNIQUE` (`team_user_id`),
  KEY `team_id_idx` (`team_id`),
  KEY `user_id_idx` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `template`
--

DROP TABLE IF EXISTS `template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `template` (
  `template_id` int NOT NULL AUTO_INCREMENT,
  `template_name` varchar(45) DEFAULT NULL,
  `template_thumb_url` varchar(255) DEFAULT NULL,
  `template_description` varchar(2000) DEFAULT NULL,
  `template_body` text,
  `template_author` varchar(2000) DEFAULT NULL,
  `status` int DEFAULT '1',
  `team_id` int DEFAULT '0',
  `templatecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`template_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(16) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `meta` varchar(255) DEFAULT NULL,
  `crdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `prefs` text,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `userid_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'klpdb'
--
/*!50003 DROP FUNCTION IF EXISTS `config` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` FUNCTION `config`(
	_key varchar(255)
) RETURNS int
    DETERMINISTIC
BEGIN

IF _key = 'folderlg' THEN
   RETURN 1000000;
ELSEIF _key = 'foldersm' THEN
   RETURN 1000;
ELSE
   RETURN 'ERROR INVALID KEY PARAM PASSED';
END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `filesperfolder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` FUNCTION `filesperfolder`(
	_value int,
    _spacer int
) RETURNS int
    DETERMINISTIC
BEGIN

RETURN (ceiling((_value+1)/_spacer)*_spacer)-_spacer;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `URLENCODE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` FUNCTION `URLENCODE`(str VARCHAR(4096) CHARSET utf8) RETURNS varchar(4096) CHARSET utf8
    DETERMINISTIC
BEGIN
   -- the individual character we are converting in our loop
   -- NOTE: must be VARCHAR even though it won't vary in length
   -- CHAR(1), when used with SUBSTRING, made spaces '' instead of ' '
   DECLARE sub VARCHAR(1) CHARSET utf8;
   -- the ordinal value of the character (i.e. ñ becomes 50097)
   DECLARE val BIGINT DEFAULT 0;
   -- the substring index we use in our loop (one-based)
   DECLARE ind INT DEFAULT 1;
   -- the integer value of the individual octet of a character being encoded
   -- (which is potentially multi-byte and must be encoded one byte at a time)
   DECLARE oct INT DEFAULT 0;
   -- the encoded return string that we build up during execution
   DECLARE ret VARCHAR(4096) DEFAULT '';
   -- our loop index for looping through each octet while encoding
   DECLARE octind INT DEFAULT 0;
 
   IF ISNULL(str) THEN
      RETURN NULL;
   ELSE
      SET ret = '';
      -- loop through the input string one character at a time - regardless
      -- of how many bytes a character consists of
      WHILE ind <= CHAR_LENGTH(str) DO
         SET sub = MID(str, ind, 1);
         SET val = ORD(sub);
         -- these values are ones that should not be converted
         -- see http://tools.ietf.org/html/rfc3986
         IF NOT (val BETWEEN 48 AND 57 OR     -- 48-57  = 0-9
                 val BETWEEN 65 AND 90 OR     -- 65-90  = A-Z
                 val BETWEEN 97 AND 122 OR    -- 97-122 = a-z
                 -- 45 = hyphen, 46 = period, 95 = underscore, 126 = tilde
                 val IN (45, 46, 95, 126)) THEN
            -- This is not an "unreserved" char and must be encoded:
            -- loop through each octet of the potentially multi-octet character
            -- and convert each into its hexadecimal value
            -- we start with the high octect because that is the order that ORD
            -- returns them in - they need to be encoded with the most significant
            -- byte first
            SET octind = OCTET_LENGTH(sub);
            WHILE octind > 0 DO
               -- get the actual value of this octet by shifting it to the right
               -- so that it is at the lowest byte position - in other words, make
               -- the octet/byte we are working on the entire number (or in even
               -- other words, oct will no be between zero and 255 inclusive)
               SET oct = (val >> (8 * (octind - 1)));
               -- we append this to our return string with a percent sign, and then
               -- a left-zero-padded (to two characters) string of the hexadecimal
               -- value of this octet)
               SET ret = CONCAT(ret, '%', LPAD(HEX(oct), 2, 0));
               -- now we need to reset val to essentially zero out the octet that we
               -- just encoded so that our number decreases and we are only left with
               -- the lower octets as part of our integer
               SET val = (val & (POWER(256, (octind - 1)) - 1));
               SET octind = (octind - 1);
            END WHILE;
         ELSE
            -- this character was not one that needed to be encoded and can simply be
            -- added to our return string as-is
            SET ret = CONCAT(ret, sub);
         END IF;
         SET ind = (ind + 1);
      END WHILE;
   END IF;
   RETURN ret;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_disable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_disable`(
  _landingpage_id int,
  _status int
  )
BEGIN
-- START TRANSACTION;
    
		-- #EXISTING LANDING PAGE 
		update landingpage
        set 
			  status = _status
        where 
			landingpage_id = _landingpage_id;

-- COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_insert`(
  _nickname  VARCHAR(255), 
  _headline  VARCHAR(255), 
  _subheadline  VARCHAR(255), 
  _description VARCHAR(255),
  _ctatext VARCHAR(255), 
  _ctaurl VARCHAR(255), 
  _ctasurvey VARCHAR(255), 
  _pagetags VARCHAR(255), 
  _email VARCHAR(255),
  _logourl VARCHAR(255), 
  _bgurl VARCHAR(255), 
  _googleanalyticsid VARCHAR(255),
  _klpbranding int,
  _pageurl VARCHAR(255)
)
BEGIN

		-- CLEANUP PAGEURL
		set @pageurl = '';
        
        -- DOUBLECHECK THAT IT DOESNT ALREADY EXIST
        select pageurl into @pageurl from landingpage where pageurl = _pageurl;
        
        -- TODO: 
        -- DELETE THIS IN THE FUTURE AFTER WE FIGURE OUT HOW TO PASS IN USER IDS
        -- UPDATE @USER_ID TO _USER_ID after fixing
		 select user_id into @user_id from user where email = _email;
        
        -- GENERATE RANDOM STRING FOR PAGEURL IF ITS NOT PASSED IN
		if _pageurl IS NULL or _pageurl = '' or LENGTH(@pageurl) > 0 then
			SET @pageurl = LEFT(MD5(RAND()), 8);
		else
			SET @pageurl = URLENCODE(_pageurl);
		end if;

		-- CAN REMOVE THIS IN THE FUTURE WHEN WE EXPLICITLY ADD TEAMS AND PASS THIS THROUGH THE SP PARAMS
		SELECT team_id INTO @team_id 
        from team_user 
        where user_id = @user_id;
        
        -- INCREMENT THE LANDINGPAGE COUNT IN TEAMS
        update team 
        set sum_landingpages = sum_landingpages + 1
        where team_id = @team_id;

		-- NEW RECORD
	   INSERT INTO landingpage (
		  nickname, 
		  headline, 
		  subheadline, 
		  description,
		  ctatext, 
		  ctaurl, 
		  ctasurvey, 
		  pagetags, 
		  user_id,
          team_id,
		  logourl, 
		  bgurl, 
		  googleanalyticsid,
		  klpbranding,
		  pageurl
	   ) VALUES (
		  _nickname, 
		  _headline, 
		  _subheadline, 
		  _description,
		  _ctatext, 
		  _ctaurl, 
		  _ctasurvey, 
		  _pagetags, 
		  @user_id,
          @team_id,
		  _logourl, 
		  _bgurl, 
		  _googleanalyticsid,
		  _klpbranding,
		  @pageurl
          );
		
        -- UPDATE THE THUMBURL RECORD
		CALL landingpage_update_thumburl (@pageurl,last_insert_id());
          
       -- GET THE ID AND RETURN IT
		select * from landingpage where landingpage_id = LAST_INSERT_ID();

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_select_by_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_select_by_id`(
  _lid int
)
BEGIN

select * from landingpage 
where landingpage_id = _lid
and bol_delete = 0;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_select_by_team` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_select_by_team`(
  _team_id int
)
BEGIN

select * 
from landingpage 
WHERE 
	team_id = _team_id
	and bol_delete = 0
ORDER BY 
	crdate ASC; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_select_by_url` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_select_by_url`(
  _pageurl varchar(50),
  _track int
)
BEGIN

update landingpage 
set statviews = statviews + 1
where pageurl = _pageurl
and status = 1
and _track = 1;

select * from landingpage 
where pageurl = _pageurl
and bol_delete = 0
and status = 1;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_select_by_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_select_by_user`(
  _user_id int
)
BEGIN

select landingpage.* 
	from 
		landingpage 
INNER JOIN team_user USING (team_id)
WHERE 
	team_user.user_id = _user_id
    and landingpage.bol_delete = 0
ORDER BY 
	landingpage.crdate ASC;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_select_by_user_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_select_by_user_email`(
  _email varchar(50),
  _limit_start bigint,
  _limit_results bigint
)
BEGIN

SET _limit_start = IFNULL(_limit_start, 0);
SET _limit_results = IFNULL(_limit_results, 20);

/*
select landingpage.* 
	from 
		landingpage 
INNER JOIN team_user USING (team_id)
INNER JOIN user USING (user_id)
WHERE 
	team_user.user_id = user.user_id
    and user.email = _email
ORDER BY 
	landingpage.crdate ASC; 
*/


select sum_landingpages
	from
		team
INNER JOIN user USING (user_id)
WHERE
	user.email = _email; 


select landingpage.*
	from
		landingpage
INNER JOIN user USING (user_id)
WHERE
	user.email = _email
    and landingpage.bol_delete = 0 
ORDER BY
	landingpage.crdate DESC
 LIMIT
	_limit_start,_limit_results; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_update` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_update`(
  _landingpage_id int,
  _nickname CHAR(35), 
  _headline CHAR(35), 
  _subheadline CHAR(255), 
  _description CHAR(255),
  _ctatext CHAR(35), 
  _ctaurl CHAR(35), 
  _ctasurvey CHAR(255), 
  _pagetags CHAR(255), 
  _logourl CHAR(35), 
  _bgurl CHAR(255), 
  _googleanalyticsid CHAR(255),
  _klpbranding int,
  _pageurl CHAR(255)
  )
BEGIN
START TRANSACTION;

		-- CLEANUP PAGEURL
		set @pageurl = '';
        
        -- DOUBLECHECK THAT IT DOESNT ALREADY EXIST
        select pageurl into @pageurl 
        from landingpage 
        where 
        pageurl = _pageurl and 
        landingpage_id <> _landingpage_id
        ORDER BY landingpage_id DESC LIMIT 0, 1;
        
        -- KEEP PAGEURL AS IT WAS (OVERRIDE FORM DATA)
		if _pageurl IS NULL or _pageurl = '' or LENGTH(@pageurl) > 0 then
        
			-- GET THE PREVIOUS VERSION
			select pageurl into @pageurl 
			from landingpage 
			where 
			landingpage_id = _landingpage_id;
		else
			-- ITS FINE TO UPDATE IT
			SET @pageurl = URLENCODE(_pageurl);
		end if;
    
		-- #EXISTING LANDING PAGE 
		update landingpage
        set 
			  nickname = _nickname,
			  headline = _headline, 
			  subheadline = _subheadline, 
			  description = _description,
			  ctatext = _ctatext, 
			  ctaurl = _ctaurl, 
			  ctasurvey = _ctasurvey, 
			  pagetags = _pagetags, 
			  logourl = _logourl, 
			  bgurl = _bgurl, 
			  googleanalyticsid = _googleanalyticsid,
			  klpbranding = _klpbranding,
			  pageurl = @pageurl
        where 
			landingpage_id = _landingpage_id;
            
		CALL landingpage_update_thumburl (@pageurl,_landingpage_id);
            
		select * 
		from landingpage
        where 
			landingpage_id = _landingpage_id;

COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_update_statctaclicks` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_update_statctaclicks`(
  _pageurl varchar(50),
  _track int
)
BEGIN

update landingpage 
set statctaclicks = statctaclicks + 1
where pageurl = _pageurl
and _track = 1;

select ctaurl 
from landingpage
where pageurl = _pageurl;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `landingpage_update_thumburl` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `landingpage_update_thumburl`(
  _url VARCHAR(255),
  _landingpage_id INT
)
BEGIN
	update landingpage
	set 
	  thumburl = _url
	where landingpage_id = _landingpage_id;
  -- CONCAT('https://kingslandingpage.s3.amazonaws.com/thumbs/',filesperfolder(_landingpage_id,config('folderlg')),'/',filesperfolder(_landingpage_id,config('foldersm')),'/',_pageurl,'.png')      

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `team_upgrade` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `team_upgrade`(
  _team_id int,
  _team_status int,
  _amount varchar(45),
  _frequency varchar(45)
  )
BEGIN
 START TRANSACTION;
    
		-- #EXISTING LANDING PAGE 
		update team
        set 
			team_status = _team_status
        where 
			team_id = _team_id;
            
		-- INSERT BILLING RECORD
        insert into team_billing (
			team_id,
            amount,
            frequency
        ) values (
			_team_id,
            _amount,
            _frequency
        );

 COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_team_insert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `user_team_insert`(
  _user_name CHAR(35), 
  _meta CHAR(35), 
  _email CHAR(255), 
  _team_name CHAR(255)
)
BEGIN
START TRANSACTION;

   INSERT INTO user(
	   user_name, 
	   meta, 
	   email
	) VALUES (
		 _user_name, 
		 _meta, 
		 _email
	);

	SET @user_id = LAST_INSERT_ID();

   INSERT INTO team (
	user_id,
    team_name
    ) VALUES (
		@user_id,
        _team_name
	);
     
   INSERT INTO team_user (
		team_id,
		user_id
    ) VALUES (
		LAST_INSERT_ID(), 
        @user_id
	);
     
COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-10  0:16:36
