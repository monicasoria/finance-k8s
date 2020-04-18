/* In Mariadb create a database for thefinance proyect */
CREATE DATABASE financedb;
/* Create a user as admin for the financedb */
CREATE USER 'finance_admin'@'localhost' IDENTIFIED BY 'finance_bedu'
/* Grant all privileges to a finance admin  user over financedb */
GRANT ALL PRIVILEGES ON financedb.* TO 'finance_admin'@'localhost';
/* Display MySQL user account privileges */
SHOW GRANTS FOR 'finance_admin'@'localhost';
/* Create the table for the consumer complaints */
CREATE TABLE consumer_complaints(
    date_received VARCHAR(15),
    product VARCHAR(50),
    sub_product VARCHAR(100),
    issue VARCHAR(100),
    sub_issue VARCHAR(100),
    consumer_complaint_narrative TEXT,
    company_public_response TEXT,
    company VARCHAR(40),
    state VARCHAR(3),
    zip_code VARCHAR(10),
    tags VARCHAR(30),
    consent_provided VARCHAR(30),
    submitted_via VARCHAR(20),
    date_sent_company VARCHAR(15),
    company_response_consumer VARCHAR(50),
    timely_response VARCHAR(10),
    consumer_disrupted VARCHAR(10),
    complaint_id INT,
    PRIMARY KEY(complaint_id)
);
/* Add the csv file data to the db table */
LOAD DATA LOCAL INFILE 'Consumer_Complaints.csv' 
INTO TABLE consumer_complaints
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
 (
    date_received,
    product,
    sub_product,
    issue,
    sub_issue,
    @dummy,
    company_public_response,
    company,
    state,
    zip_code,
    tags,
    consent_provided,
    submitted_via,
    date_sent_company,
    company_response_consumer,
    timely_response,
    consumer_disrupted,
    complaint_id
);