
-- create
CREATE TABLE fellows (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO fellows (name, age, adress) VALUES ('Clark', 20, 'Moscow');
INSERT INTO fellows (name, age, adress) VALUES ('Ban', 45, 'Kazan');
INSERT INTO fellows (name, age, adress) VALUES ('Boni', 46, 'Saint-Pit');
INSERT INTO fellows (name, age, adress) VALUES ('Sinty', 33, 'Moscow');
INSERT INTO fellows (name, age, adress) VALUES ('Petr', 37, 'Samara');
INSERT INTO fellows (name, age, adress) VALUES ('Mamy', 37, 'Samara');
INSERT INTO fellows (name, age, adress) VALUES ('David', 46, 'Moscow');
INSERT INTO fellows (name, age, adress) VALUES ('Marta', 29, 'Moscow');

-- fetch 
SELECT name as "Имя"
FROM fellows 
WHERE adress = 'Moscow'
AND age BETWEEN 18 AND 29
