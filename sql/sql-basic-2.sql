-- Display count
SELECT COUNT(*) FROM students;

-- Display students from Manila
SELECT * FROM students WHERE location = 'Manila';

-- Display students average age
SELECT AVG(age) FROM students;

-- Display students age desc
SELECT * FROM students ORDER BY age DESC;
