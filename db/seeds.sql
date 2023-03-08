INSERT INTO department (departmentName)
VALUES ("Marketing"),
       ("Administration"),
       ("Finance"),
       ("I.T."),
       ("H.R.");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80, 2),
       ("Junior Engineer", 70, 4),
       ("Engineer", 90, 4),
       ("Senior Engineer", 110, 4),
       ("Sales Associate", 80, 1),
       ("Business Analyst", 80, 3),
       ("HR Associate", 70, 5),
       ("Marketing Officer", 200, 1),
       ("COO", 200, 2),
       ("CTO", 200, 4),
       ("CEO", 220, 2),
       ("CFO", 200, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Martha", "Smith", 1, 1),
       ("Jenna", "Stewart", 1, 1),
       ("Millie", "Brown", 1, 1),
       ("Pat", "Benatar", 1, 1),
       ("Gale", "Green", 2, 1),
       ("Darlene", "Matthis", 2, 1),
       ("Marlene", "Mathews", 2, 2),
       ("Mamrie", "Hart", 3, 2),
       ("Grace", "Helbig", 3, 1),
       ("Fatima", "Diame", 4, 1),
       ("Irene", "Nguyen", 4, 2),
       ("Angie", "Hemsworth", 5, 3),
       ("Sheila", "O'Neil", 5, 3),
       ("Sam", "Garcia", 6, 3),
       ("Hannah", "Banana", 6, 3),
       ("Billie", "Eyelash", 7, 4),
       ("Kristen", "Black", 7, 4),
       ("Chelsea", "Handler", 8, 1),
       ("Keke", "Palmer", 9, 1),
       ("Hila", "Klein", 10, 1),
       ("Sansa", "Stark", 11, 1),
       ("Liz", "Kelce", 12, 1);
