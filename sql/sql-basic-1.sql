/* CREATE students TABLE */
CREATE TABLE students (
id integer,
first_name VARCHAR(30),
middle_name VARCHAR(30),
last_name VARCHAR(30),
age integer,
location VARCHAR(50)
);

/* INSERT data INTO students TABLE */
INSERT INTO students (id, first_name, middle_name, last_name, age, location)
VALUES
(1, 'Juan', '', 'Cruz', 18, 'Manila'),
(2, 'John', '', 'Young', 20, 'Manila'),
(3, 'Victor', '', 'Rivera', 21, 'Manila'),
(4, 'Adrian', '', 'Co', 19, 'Laguna'),
(5, 'Pau', '', 'Riosa', 22, 'Marikina'),
(6, 'Piolo', '', 'Pascual', 25, 'Manila');

/* UPDATE */
UPDATE students
SET first_name = 'Ana', middle_name = 'Cui', last_name='Cajocson', age=25, location='Bulacan'
WHERE id = 1;

/* DELETE */
DELETE FROM students
WHERE id = (SELECT max(id) FROM students);

