CREATE TABLE mytable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO mytable (name) VALUES ('John Doe');
INSERT INTO mytable (name) VALUES ('Jane Smith');