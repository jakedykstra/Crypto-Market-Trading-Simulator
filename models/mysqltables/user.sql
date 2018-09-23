drop database if exists userDB;
create database userDB;
use userDB;

create table users (
id int not null auto_increment,
email text not null,
password varchar(32) not null,
ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary key (id)
);


