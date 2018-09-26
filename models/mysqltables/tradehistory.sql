use portfolio;

create table trade_history (
id int not null auto_increment,
coinPrice float(10,2),
usdAmount float(15,2),
coinAmount float(10,2),
tradeType varchar(255),
cryptoType varchar(255),
primary key (id) 
);



