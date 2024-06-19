-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 19, 2024 at 11:19 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kpri_kd`
--

-- --------------------------------------------------------

--
-- Table structure for table `member_profiles`
--

CREATE TABLE `member_profiles` (
  `id` int NOT NULL,
  `user_member_id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `position` varchar(100) DEFAULT NULL,
  `work_unit_id` int NOT NULL,
  `address` text,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `member_profiles`
--

INSERT INTO `member_profiles` (`id`, `user_member_id`, `full_name`, `position`, `work_unit_id`, `address`, `phone_number`, `email`) VALUES
(1, 1, 'Moh Dwi Ramdhani', 'Tank', 1, 'Veteran', '082296064822', NULL),
(2, 6, 'dhani', NULL, 3, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `savings_balance`
--

CREATE TABLE `savings_balance` (
  `id` int NOT NULL,
  `user_member_id` int NOT NULL,
  `principal_saving` decimal(10,2) DEFAULT '0.00',
  `mandatory_saving` decimal(10,2) DEFAULT NULL,
  `voluntary_saving` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_members`
--

CREATE TABLE `user_members` (
  `id` int NOT NULL,
  `nip` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_members`
--

INSERT INTO `user_members` (`id`, `nip`, `password`, `created_at`, `is_active`) VALUES
(1, '190302029', '$2b$10$nOHmD5WQ6E0BvtWabLEqaeaHmZ7JRcWjtPgaD5In.eUXAm/od2rg.', '2024-06-19 22:14:58', 1),
(3, '190302021', '$2b$10$Aw9/dV/1wl68yp7KJI0CHuuVF8qAuro7lXxFjSLtOcjJsJJqZ.b4m', '2024-06-19 22:45:40', 1),
(6, '911', '$2b$10$.gg1nM7Ip9smahSUzQ7hZuo8Ui893NbQR6WmTRadkmatsOUZdsnze', '2024-06-19 23:10:40', 1),
(7, '190302020', '$2b$10$ELViNt1wrvEBVRgUZST5dOwQYqJ.GtYA1FR2bcXvE/FNn8DwE2hBe', '2024-06-19 23:19:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `work_units`
--

CREATE TABLE `work_units` (
  `id` int NOT NULL,
  `code` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `work_units`
--

INSERT INTO `work_units` (`id`, `code`, `name`) VALUES
(1, 'A1', 'Dinas Perhubungan'),
(3, 'A2', 'Dinas Bina Marga');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member_profiles`
--
ALTER TABLE `member_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_member_id` (`user_member_id`),
  ADD KEY `work_unit_id` (`work_unit_id`);

--
-- Indexes for table `savings_balance`
--
ALTER TABLE `savings_balance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_member_id` (`user_member_id`);

--
-- Indexes for table `user_members`
--
ALTER TABLE `user_members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nip` (`nip`);

--
-- Indexes for table `work_units`
--
ALTER TABLE `work_units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member_profiles`
--
ALTER TABLE `member_profiles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `savings_balance`
--
ALTER TABLE `savings_balance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_members`
--
ALTER TABLE `user_members`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `work_units`
--
ALTER TABLE `work_units`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `member_profiles`
--
ALTER TABLE `member_profiles`
  ADD CONSTRAINT `member_profiles_ibfk_1` FOREIGN KEY (`user_member_id`) REFERENCES `user_members` (`id`),
  ADD CONSTRAINT `member_profiles_ibfk_2` FOREIGN KEY (`work_unit_id`) REFERENCES `work_units` (`id`);

--
-- Constraints for table `savings_balance`
--
ALTER TABLE `savings_balance`
  ADD CONSTRAINT `savings_balance_ibfk_1` FOREIGN KEY (`user_member_id`) REFERENCES `user_members` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
