-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 24 Octobre 2016 à 12:19
-- Version du serveur: 5.6.12-log
-- Version de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bookreader`
--
--CREATE DATABASE IF NOT EXISTS `bookreader` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bookreader`;

-- --------------------------------------------------------

--
-- Structure de la table `bible`
--

CREATE TABLE IF NOT EXISTS `bible` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sourate` int(11) NOT NULL,
  `verset` int(11) NOT NULL,
  `french_content` text NOT NULL,
  `english_content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Contenu de la table `bible`
--

INSERT INTO `bible` (`id`, `sourate`, `verset`, `french_content`, `english_content`) VALUES
(1, 1, 1, 'Texte français', 'Texte anglais'),
(2, 1, 2, 'Texte français 2', 'Texte anglais 2'),
(3, 2, 1, 'Texte français 3', 'Texte anglais 3'),
(4, 1, 3, 'ccd', 'ccd'),
(5, 1, 4, 'ccp', 'ccm'),
(6, 1, 5, 'cca', 'ccs'),
(7, 1, 6, 'c9c', 'c6csd'),
(8, 1, 7, 'cpc', 'cpcp'),
(9, 1, 8, 'ama', 'ama');

-- --------------------------------------------------------

--
-- Structure de la table `coran`
--

CREATE TABLE IF NOT EXISTS `coran` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sourate` tinyint(4) NOT NULL,
  `verset` smallint(6) NOT NULL,
  `english_sourate_name` varchar(255) NOT NULL,
  `english_content` text NOT NULL,
  `french_sourate_name` varchar(255) NOT NULL,
  `french_content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `coran`
--

INSERT INTO `coran` (`id`, `sourate`, `verset`, `english_sourate_name`, `english_content`, `french_sourate_name`, `french_content`) VALUES
(0, 1, 1, 'The opener', 'In the name of Allah , the Entirely Merciful, the Especially Merciful.', 'Al-Fatihah', 'Au nom d''Allah, le Tout Miséricordieux, le Très Miséricordieux.'),
(4, 1, 2, 'The opener', '[All] praise is [due] to Allah , Lord of the worlds -', 'Al-Fatihah', 'Louange à Allah, Seigneur de l''univers.'),
(5, 2, 1, 'The Cow', 'Alif, Lam, Meem.', 'Al-Baqarah', 'Alif, Lam, Mim .');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
