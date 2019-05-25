
insert into user_group (name) VALUES ('ADMIN'), ('TRIADOR'), ('FINALIZADOR');

insert into user (name, email, password, user_group_id)
values ('Administrador', 'admin@softplan.com.br', '$2a$10$i2/v4r4x34AmxHpKxbL3QeEb6z3/7fO/4Y4nvBCF3Yd1MHeuWkPmK', 1);



-- insert into user_group (group, user)
-- VALUES (1, 1);

-- INSERT INTO users_roles
-- (user_id, role_id)
-- VALUES(1, 1), (1, 2), (1, 3);