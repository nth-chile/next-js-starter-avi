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
-- Dumping routines for database 'klpdb'
--
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
  _nickname CHAR(35), 
  _headline CHAR(35), 
  _subheadline CHAR(255), 
  _description CHAR(255),
  _ctatext CHAR(35), 
  _ctaurl CHAR(35), 
  _ctasurvey CHAR(255), 
  _pagetags CHAR(255), 
  _email VARCHAR(50),
  _logourl CHAR(35), 
  _bgurl CHAR(255), 
  _googleanalyticsid CHAR(255),
  _klpbranding int,
  _pageurl CHAR(255)
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
			SET @pageurl = _pageurl;
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
-- START TRANSACTION;
    
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
			  pageurl = _pageurl
        where 
			landingpage_id = _landingpage_id;
            
		select * 
		from landingpage
        where 
			landingpage_id = _landingpage_id;

-- COMMIT;
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

-- Dump completed on 2020-12-01 20:52:47
