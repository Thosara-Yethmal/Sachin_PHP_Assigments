-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: SMS
-- ------------------------------------------------------
-- Server version	8.0.27

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

--
-- Table structure for table `academic`
--

DROP TABLE IF EXISTS `academic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `academic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `verification_status_id` int NOT NULL DEFAULT '2',
  `verification_code` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_academic_verification_status1_idx` (`verification_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic`
--

LOCK TABLES `academic` WRITE;
/*!40000 ALTER TABLE `academic` DISABLE KEYS */;
INSERT INTO `academic` VALUES (1,'hasitha','perera','75845895v','hasitha@yahoo.com','hasitha','12345','2022-06-05',1,'62a5d785e8f4c'),(2,'thushara','perera','958652562v','thushara@gmail.com','thusahara','12345','2022-06-12',2,'62a5d8b8a593b');
/*!40000 ALTER TABLE `academic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `registration_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_admin_verification_status_idx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@gmail.com','12345','admin','nimantha','perera','960256325v','2021-05-06');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assignment_name` varchar(45) NOT NULL,
  `grade_id` int NOT NULL,
  `subject_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `start_date` date NOT NULL,
  `last_date` date NOT NULL,
  `path` varchar(160) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_assignment_grade1_idx` (`grade_id`),
  KEY `fk_assignment_subject1_idx` (`subject_id`),
  KEY `fk_assignment_teacher1_idx` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,'matrix',11,2,1,'2022-05-06','2022-05-12','62aa47de27ea1logival.docx'),(2,'Essay',10,1,1,'2022-06-16','2022-06-23','../assignment/62aa4bf33f139a.pdf'),(3,'Home Test',7,3,1,'2022-06-15','2022-06-18','../assignment/62aa4ca4d0b4asrs.docx'),(4,'Final Exam',9,5,2,'2022-06-15','2022-06-23','assignment/62aac43894ab0Web Programming 1 - Research_H7DT_04_EX_01.pdf');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment_submit_status`
--

DROP TABLE IF EXISTS `assignment_submit_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment_submit_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_submit_status`
--

LOCK TABLES `assignment_submit_status` WRITE;
/*!40000 ALTER TABLE `assignment_submit_status` DISABLE KEYS */;
INSERT INTO `assignment_submit_status` VALUES (1,'Submitted'),(2,'Not Submit');
/*!40000 ALTER TABLE `assignment_submit_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_marks`
--

DROP TABLE IF EXISTS `exam_marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_marks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `assignment_id` int DEFAULT NULL,
  `marks` double DEFAULT '0',
  `comment` varchar(100) DEFAULT '-',
  `result` varchar(45) DEFAULT '-',
  `submit_status_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_new_table_1_idx` (`student_id`),
  KEY `fk_new_table_2_idx` (`assignment_id`),
  KEY `fk_exam_marks_1_idx` (`submit_status_id`),
  CONSTRAINT `fk_exam_marks_1` FOREIGN KEY (`submit_status_id`) REFERENCES `assignment_submit_status` (`id`),
  CONSTRAINT `fk_new_table_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  CONSTRAINT `fk_new_table_2` FOREIGN KEY (`assignment_id`) REFERENCES `assignment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_marks`
--

LOCK TABLES `exam_marks` WRITE;
/*!40000 ALTER TABLE `exam_marks` DISABLE KEYS */;
INSERT INTO `exam_marks` VALUES (1,1,3,85,'Good','Pass',1),(2,1,3,25,'Not Good','Fail',1);
/*!40000 ALTER TABLE `exam_marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade`
--

DROP TABLE IF EXISTS `grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grade` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade`
--

LOCK TABLES `grade` WRITE;
/*!40000 ALTER TABLE `grade` DISABLE KEYS */;
INSERT INTO `grade` VALUES (1,'Grade 01'),(2,'Grade 02'),(3,'Grade 03'),(4,'Grade 04'),(5,'Grade 05'),(6,'Grade 06'),(7,'Grade 07'),(8,'Grade 08'),(9,'Grade 09'),(10,'Grade 10'),(11,'Grade 11');
/*!40000 ALTER TABLE `grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `grade_id` int NOT NULL,
  `registration_date` datetime DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `verification_code` varchar(45) DEFAULT '0',
  `verification_status_id` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`),
  KEY `fk_student_verification_status1_idx` (`verification_status_id`),
  KEY `fk_student_grade1_idx` (`grade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'priya','chathurangi','1995-02-12','priya@gmail.com',7,'2022-11-10 00:00:00','priya','12345','62ab5a6023799',1),(2,'nimesh','fernando','2010-06-15','nimesh@gmail.com',11,'2022-06-12 15:03:35','nimesh','12345','62ab5a81e98c8',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (1,'Sinhala'),(2,'Maths'),(3,'Science'),(4,'Buddhism'),(5,'Commerce'),(6,'Tamil');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `subject_id` int NOT NULL,
  `grade_id` int NOT NULL,
  `registration_date` date DEFAULT NULL,
  `verification_code` varchar(45) DEFAULT '0',
  `verification_status_id` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`),
  KEY `fk_teacher_subject1_idx` (`subject_id`),
  KEY `fk_teacher_grade1_idx` (`grade_id`),
  KEY `fk_teacher_verification_status1_idx` (`verification_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'rukshan','perera','rukshanperera122@gmail.com','rukshan','12345','950432985v',1,1,'2022-06-05','62ab428f4084c',1),(2,'tharak','sankalpa','tharaka@gmail.com','tharaka','12345','958685421v',1,1,'2022-06-12','12',1),(3,'sandun','peiris','sandun@gmail.com','sandun','12345','589632578v',2,1,'2022-06-12','62ab598d1776f',1),(4,'kasun','peiris','kasun@gmail.com','kasun','12345','589123578v',2,1,'2022-06-13','62ab59a6c62b3',2),(5,'gihani','silva','gihani@gmail.com','gihani','12345','895896525v',4,7,'2022-06-16','0',2);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_type`
--

DROP TABLE IF EXISTS `user_has_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_has_type` (
  `user_email` varchar(100) NOT NULL,
  `user_type_id` int DEFAULT NULL,
  PRIMARY KEY (`user_email`),
  KEY `user_type_id_idx` (`user_type_id`),
  CONSTRAINT `user_type_id` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_type`
--

LOCK TABLES `user_has_type` WRITE;
/*!40000 ALTER TABLE `user_has_type` DISABLE KEYS */;
INSERT INTO `user_has_type` VALUES ('rukshanperera122@gmail.com',1),('tharaka@gmail.com',1),('hasitha@yahoo.com',2),('thushara@gmail.com',2),('nimesh@gmail.com',3),('priya@gmail.com',3),('admin@gmail.com',4);
/*!40000 ALTER TABLE `user_has_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'Teacher'),(2,'Academic'),(3,'Student'),(4,'Admin');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verification_status`
--

DROP TABLE IF EXISTS `verification_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verification_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification_status`
--

LOCK TABLES `verification_status` WRITE;
/*!40000 ALTER TABLE `verification_status` DISABLE KEYS */;
INSERT INTO `verification_status` VALUES (1,'verified'),(2,'not veryfied');
/*!40000 ALTER TABLE `verification_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'SMS'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-04 21:27:01
