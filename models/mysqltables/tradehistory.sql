drop database if exists trade_history_db;
create database trade_history_db;
use trade_history_db;

create table trade_history (
id int not null auto_increment,
coin_price float(10,2),
USD_amount float(15,2),
coin_amt float(10,2),
trade_type varchar(255) not null,
crypto_type varchar(255) not null,
ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary key (id) 
);



