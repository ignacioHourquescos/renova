USE renova;
DROP table IF EXISTS `agrupaciones`;
CREATE TABLE `agrupaciones` (
  `codigo` int(30) not null primary key,
  `descripcion` varchar(255) NOT NULL
);

LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 5.7/Uploads/agrupaciones.csv" INTO TABLE agrupaciones;
FIELDS TERMINATED BY ";"
LINES TERMINATED BY "\n"
IGNORE 1 ROWS
(codigo,descripcion)