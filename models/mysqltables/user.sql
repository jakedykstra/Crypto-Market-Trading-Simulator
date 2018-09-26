
use portfolio;

create table users (
id int not null auto_increment,
email text not null,
password varchar(100) not null,
primary key (id)
);


