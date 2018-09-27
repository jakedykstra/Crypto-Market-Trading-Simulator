use rhog7by3uomrp7dp;


create table trade_history (
id int not null auto_increment,
coinPrice float(10,2),
usdAmount float(15,2),
coinAmount float(10,2),
tradeType varchar(255),
cryptoType varchar(255),
primary key (id) 
);


create table users (
id int not null auto_increment,
email text not null,
password varchar(100) not null,
primary key (id)
);


create table portfolios (
id int not null auto_increment,
totalNet float(10,2),
usd float(12,2),
btc float(12,2),
btc_val float(12,2),
eth float(12,2),
eth_val float(12,2),
xrp float(12,2),
xrp_val float(12,2),
ltc float(12,2),
ltc_val float(12,2),
userId int,
primary key(id)
); 
