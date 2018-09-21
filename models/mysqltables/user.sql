drop database if exists userDB;
create database userDB;
use userDB;

create table users (
id int not null auto_increment,
email text not null,
password varchar(32) not null,
primary key (id)
);


