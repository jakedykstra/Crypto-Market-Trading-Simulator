use portfolio;

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
primary key(id)
); 
