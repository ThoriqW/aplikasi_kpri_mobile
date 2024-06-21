-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 21, 2024 at 11:06 PM
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
-- Table structure for table `balance_savings`
--

CREATE TABLE `balance_savings` (
  `id` int NOT NULL,
  `user_member_id` int NOT NULL,
  `principal_saving` decimal(10,2) DEFAULT '0.00',
  `mandatory_saving` decimal(10,2) DEFAULT NULL,
  `voluntary_saving` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `balance_savings`
--

INSERT INTO `balance_savings` (`id`, `user_member_id`, `principal_saving`, `mandatory_saving`, `voluntary_saving`) VALUES
(1, 1, 10000.00, 3400000.00, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image_url`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'htttps/sdasdsad.com', 'judul sdasd', 'asdasda', 'inactive', '2024-06-21 10:50:13', '2024-06-21 10:50:13'),
(2, 'https/img/a.com', 'judul ababa', 'sadnafjaebijfbsdijgbseidjgbisdjfb', 'active', '2024-06-21 10:51:02', '2024-06-21 10:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int NOT NULL,
  `user_member_id` int NOT NULL,
  `month` varchar(20) NOT NULL,
  `year` int NOT NULL,
  `time_period` int DEFAULT NULL,
  `installment_number` int DEFAULT NULL,
  `arrears` decimal(10,2) DEFAULT NULL,
  `principal` decimal(10,2) DEFAULT NULL,
  `interest` decimal(10,2) DEFAULT NULL,
  `mandatory_saving` decimal(10,2) DEFAULT NULL,
  `total_bill` decimal(10,2) DEFAULT NULL,
  `payment_amount` decimal(10,2) DEFAULT NULL,
  `remaining_arrears` decimal(10,2) DEFAULT NULL,
  `status` enum('paid','unpaid') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `user_member_id`, `month`, `year`, `time_period`, `installment_number`, `arrears`, `principal`, `interest`, `mandatory_saving`, `total_bill`, `payment_amount`, `remaining_arrears`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Januari', 2024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-20 15:29:18', '2024-06-20 15:29:18'),
(2, 1, 'Februari', 2024, 24, 1, NULL, 250000.00, 120000.00, 25000.00, 395000.00, 395000.00, NULL, 'paid', '2024-06-20 15:30:33', '2024-06-20 15:30:33');

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
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `join_date` date NOT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `member_profiles`
--

INSERT INTO `member_profiles` (`id`, `user_member_id`, `full_name`, `position`, `work_unit_id`, `address`, `phone_number`, `email`, `photo_url`, `join_date`, `status`) VALUES
(1, 1, 'Moh Dwi Ramdhani', 'Tank', 1, 'Veteran', '082295050505', 'ramabmp@gmail.com', 'https/snjdjasdajsnda.com', '2024-01-15', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int NOT NULL,
  `role` enum('pengawas','pengurus','staff') NOT NULL,
  `position` varchar(100) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `role`, `position`, `full_name`, `photo_url`, `description`, `created_at`, `updated_at`) VALUES
(1, 'pengurus', 'Ketua', 'Saleh Ban', 'httpsdsadas.com', 'sdsadas', '2024-06-21 03:49:58', '2024-06-21 03:49:58'),
(2, 'staff', 'Kasir', 'yayayaya', NULL, NULL, '2024-06-21 03:50:18', '2024-06-21 03:50:18');

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
-- Indexes for table `balance_savings`
--
ALTER TABLE `balance_savings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_member_id` (`user_member_id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_member_id` (`user_member_id`);

--
-- Indexes for table `member_profiles`
--
ALTER TABLE `member_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_member_id` (`user_member_id`),
  ADD KEY `work_unit_id` (`work_unit_id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `balance_savings`
--
ALTER TABLE `balance_savings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `member_profiles`
--
ALTER TABLE `member_profiles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
-- Constraints for table `balance_savings`
--
ALTER TABLE `balance_savings`
  ADD CONSTRAINT `balance_savings_ibfk_1` FOREIGN KEY (`user_member_id`) REFERENCES `user_members` (`id`);

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`user_member_id`) REFERENCES `user_members` (`id`);

--
-- Constraints for table `member_profiles`
--
ALTER TABLE `member_profiles`
  ADD CONSTRAINT `member_profiles_ibfk_1` FOREIGN KEY (`user_member_id`) REFERENCES `user_members` (`id`),
  ADD CONSTRAINT `member_profiles_ibfk_2` FOREIGN KEY (`work_unit_id`) REFERENCES `work_units` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
