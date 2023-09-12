-- creating the database
CREATE DATABASE crudnodejsmysql2;

-- using the database--usando la base de datos
use crudnodejsmysql2;

--creating a table
CREATE TABLE customer (
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(50) NOT NULL,
 direccion VARCHAR(100) NOT NULL,
 telefono VARCHAR(15) NOT NULL,   
);


-- show all table
SHOW TABLE;

-- to describe the table
customer;

