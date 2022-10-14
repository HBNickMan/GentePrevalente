CREATE DATABASE gentprevdb;

use gentprevdb;

CREATE TABLE `tblEmpresas` (
  `empre_id` int(11) NOT NULL,
  `empre_name` varchar(200) NOT NULL,
  `empre_buss` varchar(200) NOT NULL,
  `empre_type` varchar(50) NOT NULL,
  `empre_ityp` varchar(50) NOT NULL,
  `empre_empl` varchar(20) NOT NULL,
  `empre_logo` varchar(400) NOT NULL,
  `empre_stat` varchar(20) DEFAULT 0 NOT NULL,
  `createdAt`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `modificAt`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `tblEmpresas` (`empre_id`, `empre_name`, `empre_buss`, `empre_type`, `empre_ityp`, `empre_empl`, `empre_logo`, `empre_stat`) VALUES
(1, 'Prevalent', 'Prevalentware', 'NIT', '1231234', '10', 'Prevalentware_Logo.png', '0'),
(2, 'PVR S.A.S.', 'Petroleos asociados', 'AT', '45456756', '20', 'Pretroleo_Logo.png', '0'),
(3, 'Adidas', 'Adidasware', 'ID', '34446568', '350', 'Adidas_Logo.png', '0'),
(4, 'Nike', 'Nikeware', 'NIT', '3432446566', '400', 'Nike_Logo.png', '0'),
(5, 'Apple', 'Appleware', 'AT', '3453465456', '5000', 'Apple_Logo.png', '0');