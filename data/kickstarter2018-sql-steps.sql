/* In Mariadb create a database for thefinance proyect */
CREATE DATABASE financedb;
/* Create a user as admin for the financedb */
CREATE USER 'finance_admin'@'localhost' IDENTIFIED BY 'finance_bedu'
/* Grant all privileges to a finance admin  user over financedb */
GRANT ALL PRIVILEGES ON financedb.* TO 'finance_admin'@'localhost';
/* Display MySQL user account privileges */
SHOW GRANTS FOR 'finance_admin'@'localhost';
/* Create the table for the consumer complaints */
CREATE TABLE kickstarter_proyects_2018(
    id INT,
    name VARCHAR(255),
    category VARCHAR(255),
    main_category VARCHAR(255),
    currency CHAR(3),
    deadline TIMESTAMP,
    goal INT,
    launched TIMESTAMP,
    pledged FLOAT,
    state VARCHAR(255),
    backers INT,
    country CHAR(2),
    usd_pledged FLOAT,
    usd_pledged_real FLOAT,
    usd_goal_real FLOAT
);
/* Add the csv file data to the db table */
LOAD DATA LOCAL INFILE 'ks-projects-201801.csv' 
INTO TABLE kickstarter_proyects_2018
FIELDS TERMINATED BY ',' 
(
    id,
    name,
    category,
    main_category,
    currency,
    deadline,
    goal,
    launched,
    pledged,
    state,
    backers,
    country,
    usd_pledged,
    usd_pledged_real,
    usd_goal_real
);