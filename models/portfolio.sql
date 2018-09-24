drop database if exists portfolioDB;
create database portfolioDB;
use portfolioDB;

create table portfolios (
id int not null auto_increment,
total_net float(10,2) not null,
usd float(12,2) not null,
btc float(12,2) not null,
btc_val float(12,2),
eth float(12,2) not null,
ethval float(12,2),
xrp float(12,2) not null,
xrp_val float(12,2),
ltc float(12,2) not null,
ltc_val float(12,2),
ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary key(id)
); 
