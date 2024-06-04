CREATE DATABASE mydb;

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL
);

INSERT INTO messages (message) VALUES ('Hola, estos datos son de la base de datos');
