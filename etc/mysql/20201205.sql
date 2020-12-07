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
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (1,'testing','test','2020-12-01 04:18:13','2020-12-01 04:18:13');
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landingpage`
--

DROP TABLE IF EXISTS `landingpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landingpage` (
  `landingpage_id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Choose a Nickname',
  `headline` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Headline Goes Here',
  `subheadline` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Lengthy Description Goes Here',
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
  PRIMARY KEY (`landingpage_id`),
  UNIQUE KEY `pageurl` (`pageurl`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landingpage`
--

LOCK TABLES `landingpage` WRITE;
/*!40000 ALTER TABLE `landingpage` DISABLE KEYS */;
INSERT INTO `landingpage` VALUES (1,'FreshTurkeys.com','Fresh Turkeys for your table','','Farm to table turkeys, delivered daily.  Can\'t get enough turkey? We got you covered fam.','','','',0,0,0,'',5,5,'','','',0,'8d40a8bb','2020-12-04 05:13:40',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/8d40a8bb.png'),(2,'test page','asdasd','','asdasd','','','',0,0,0,'',5,5,'','','',0,'37e52086','2020-12-04 05:17:01',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/37e52086.png'),(3,'Fresh Turkeys for sale','Fresh Turkeys','','Who doesn\'t love fresh turkeys? Gotta be fresh. Gotta be daily.','Subscribe for $24.99/day!','','',0,0,0,'',8,8,'','','',0,'fresh-daily-turkeys','2020-12-04 18:12:54',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/fresh-daily-turkeys.png'),(4,'Body Disposal','Dispose of bodies instantly, with','just a tap!','That\'s right! No more calling expensive crew members to cover up your dastardly deeds. Our all inclusive app service will handle everything for you, from body removal to alibi. We got you covered.','Sign up today and save!','','',0,0,0,'',8,8,'','','',0,'body-disposal','2020-12-04 18:35:27',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/body-disposal.png'),(5,'ToothPaste by the Gallon','Do you enjoy guzzling toothpaste','by the gallon?','True toothpaste aficionados know the truth: There is nothing more satisfying than unwinding with a tall glass of toothpaste in the evening. But that means stocking up on expensive little tubes! That\'s silly. We save you money selling delicious, creamy too','Subscribe and save!','','',0,0,0,'',8,8,'','','',0,'toothpaste-lovers','2020-12-05 19:22:56',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/toothpaste-lovers.png'),(6,'Makeup Addiction','Are you addicted to makeup?','','With our new powdered makeup and syringe based makeup, you can get your makeup fix. Nitrous cannisters coming soon!','Inject makeup into my veins!','','',0,0,0,'',8,8,'','','',0,'makeup-addiction','2020-12-05 21:11:53',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/makeup-addiction.png'),(7,'jareds-page','jareds-page','','asdfasdffdsa','','','',0,0,0,'',7,7,'','','',0,'234567890-jareds-page','2020-12-06 00:48:45',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/234567890-jareds-page.png'),(8,'new page 2','new page 2','','','','','',0,0,0,'',7,7,'','','',0,'new page 2','2020-12-06 02:06:27',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/new page 2.png'),(9,'new page','new page','','','','','',0,0,0,'',7,7,'','','',0,'new page','2020-12-06 02:11:08',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/new page.png'),(10,'new page clone 2','new page clone 2','','','','','',0,0,0,'',7,7,'','','',0,'new page clone 2','2020-12-06 02:13:26',0,'https://kingslandingpage.s3.amazonaws.com/thumbs/new page clone 2.png'),(11,'new page clone 2','new page clone 2','','','','','',0,0,0,'',7,7,'','','',0,'e1dbe48a','2020-12-06 02:15:57',0,'https://kingslandingpage.s3.amazonaws.com/thumbs/e1dbe48a.png'),(12,'new page 23','new page 23','','','','','',0,0,0,'',7,7,'','','',0,'new page 23','2020-12-06 02:16:16',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/new page 23.png'),(13,'new page 23r','new page 23r','','','','','',0,0,0,'',7,7,'','','',0,'new page 23r','2020-12-06 02:17:19',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/new page 23r.png'),(14,'12345','1234 (edited)','','','','','',0,0,0,'',7,7,'','','',0,'12345','2020-12-06 02:18:02',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/12345.png'),(15,'1234 (clone)','1234 (clone)','','','','','',0,0,0,'',7,7,'','','',0,'1234 (clone)','2020-12-06 02:18:47',1,'https://kingslandingpage.s3.amazonaws.com/thumbs/1234 (clone).png'),(16,'farfig2','nugen','','','','','',0,0,0,'',8,8,'','','',0,'test page (200)','2020-12-06 03:22:40',0,'https://kingslandingpage.s3.amazonaws.com/thumbs/test%20page%20%28200%29.png'),(17,'test page 2','sdfsdf','','','','','',0,0,0,'',8,8,'','','',0,'axeman (justified)','2020-12-06 03:49:47',0,'https://kingslandingpage.s3.amazonaws.com/thumbs/axeman%20%28justified%29.png');
/*!40000 ALTER TABLE `landingpage` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`team_id`),
  UNIQUE KEY `teamid_UNIQUE` (`team_id`),
  KEY `user_id_idx` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'Jerry Team3',1,1,'2020-11-30 20:57:05'),(2,'teamgecko',2,1,'2020-11-30 22:23:48'),(3,'muchnick+3@gmail.com',3,1,'2020-12-01 21:53:54'),(4,'muchnick+1@gmail.com',4,1,'2020-12-01 22:23:33'),(5,'muchnick+6@gmail.com',5,1,'2020-12-01 22:23:59'),(6,'jaredsalzano+245364754534523@gmail.com',6,1,'2020-12-01 22:59:33'),(7,'jaredsalzano@gmail.com',7,1,'2020-12-02 21:16:34'),(8,'muchnick@gmail.com',8,1,'2020-12-04 18:10:31');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `team_billing`
--

LOCK TABLES `team_billing` WRITE;
/*!40000 ALTER TABLE `team_billing` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_billing` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `team_user`
--

LOCK TABLES `team_user` WRITE;
/*!40000 ALTER TABLE `team_user` DISABLE KEYS */;
INSERT INTO `team_user` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8);
/*!40000 ALTER TABLE `team_user` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `template`
--

LOCK TABLES `template` WRITE;
/*!40000 ALTER TABLE `template` DISABLE KEYS */;
/*!40000 ALTER TABLE `template` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `userid_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jerry3','me@somewhere.com3',NULL,'Fernholz3','2020-11-30 15:13:01'),(2,'jax','jax@gmail',NULL,'meta','2020-11-30 22:23:48'),(3,'muchnick+3@gmail','muchnick+3@gmail.com',NULL,'{\"nickname\":\"muchnick+3\",\"name\":\"mu','2020-12-01 21:53:54'),(4,'muchnick+1@gmail','muchnick+1@gmail.com',NULL,'{\"nickname\":\"muchnick+1\",\"name\":\"mu','2020-12-01 22:23:33'),(5,'muchnick+6@gmail','muchnick+6@gmail.com',NULL,'{\"nickname\":\"muchnick+6\",\"name\":\"mu','2020-12-01 22:23:59'),(6,'jaredsalzano+245','jaredsalzano+245364754534523@gmail.com',NULL,'{\"nickname\":\"jaredsalzano+245364754','2020-12-01 22:59:33'),(7,'jaredsalzano@gma','jaredsalzano@gmail.com',NULL,'{\"nickname\":\"jaredsalzano\",\"name\":\"','2020-12-02 21:16:34'),(8,'muchnick@gmail.c','muchnick@gmail.com',NULL,'{\"given_name\":\"Avi\",\"family_name\":\"','2020-12-04 18:10:31');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'klpdb'
--
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
/*!50003 DROP PROCEDURE IF EXISTS `disable_landingpage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `disable_landingpage`(
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
/*!50003 DROP PROCEDURE IF EXISTS `ins_landingpage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `ins_landingpage`(
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
		  pageurl,
          thumburl
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
		  @pageurl,
          CONCAT('https://kingslandingpage.s3.amazonaws.com/thumbs/',@pageurl,'.png')
          );
          
       -- GET THE ID AND RETURN IT
		select * from landingpage where landingpage_id = LAST_INSERT_ID();

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ins_user_team` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `ins_user_team`(
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
/*!50003 DROP PROCEDURE IF EXISTS `sel_landingpage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `sel_landingpage`(
  _lid int
)
BEGIN

select * from landingpage 
where landingpage_id = _lid;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sel_landingpage_by_team` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `sel_landingpage_by_team`(
  _team_id int
)
BEGIN

select * 
from landingpage 
WHERE 
	team_id = _team_id
ORDER BY 
	crdate ASC; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sel_landingpage_by_url` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `sel_landingpage_by_url`(
  _pageurl varchar(50)
)
BEGIN

select * from landingpage 
where pageurl = _pageurl;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sel_landingpage_by_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `sel_landingpage_by_user`(
  _user_id int
)
BEGIN

select landingpage.* 
	from 
		landingpage 
INNER JOIN team_user USING (team_id)
WHERE 
	team_user.user_id = _user_id
ORDER BY 
	landingpage.crdate ASC; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sel_landingpage_by_user_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `sel_landingpage_by_user_email`(
  _email varchar(50)
)
BEGIN

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

select landingpage.*
	from
		landingpage
INNER JOIN user USING (user_id)
WHERE
	user.email = _email
ORDER BY
	landingpage.crdate DESC; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `upd_landingpage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `upd_landingpage`(
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
			  pageurl = _pageurl,
              thumburl = CONCAT('https://kingslandingpage.s3.amazonaws.com/thumbs/',@pageurl,'.png')
        where 
			landingpage_id = _landingpage_id;
            
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
/*!50003 DROP PROCEDURE IF EXISTS `upgrade_team` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`dbmasteruser`@`%` PROCEDURE `upgrade_team`(
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
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-05 22:53:05
