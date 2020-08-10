INSERT INTO department (department_name)
VALUES ('Developer'), ('Sales'), ('Management');

INSERT INTO roles (title, salary, department_id)
VALUES ('Front End Developer', '100000', 1),
('Back End Developer', '120000', 1), 
('Sales Manager','80000', 2 ),
('CEO', '150000', 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ('Tom', 'Herman', 4, null), 
('Chris', 'Ash', 1, 1), 
('Mike', 'Yurcich', 2, 1),
('Stan', 'Drayton', 3, 1),
('Andre', 'Coleman', 2, 3);
