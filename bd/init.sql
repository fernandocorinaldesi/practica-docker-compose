CREATE SCHEMA gestion;

CREATE TABLE gestion.messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL
);

INSERT INTO gestion.messages (message) VALUES ('Hola, estos datos son de la base de datos');
