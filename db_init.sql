CREATE DATABASE guestbook;
USE guestbook;

drop table if exists orders;
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    event VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (name, email, message, event)
VALUES 
    ('Alice', 'alice@example.com', 'Hello from Alice', 'Launch Party'),
    ('Bob', 'bob@example.com', 'Greetings from Bob', 'Networking Event');
