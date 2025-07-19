-- Criando a tabela das aulas
CREATE TABLE aulas (
	id_aulas INTEGER PRIMARY KEY NOT NULL,
  	nm_aula varchar(15),
  	nm_professor varchar(40)
);

-- Inserindo dados como professor (que não tem uma tabela própria) e respectivas aulas
INSERT INTO aulas (id_aulas, nm_aula, nm_professor) VALUES (1, 'Português', 'Prof. João Paulo');
INSERT INTO aulas (id_aulas, nm_aula, nm_professor) VALUES (2, 'Ciências', 'Prof. Bruno');
INSERT INTO aulas (id_aulas, nm_aula, nm_professor) VALUES (3, 'Geografia', 'Prof. Carla');
INSERT INTO aulas (id_aulas, nm_aula, nm_professor) VALUES (4, 'Matemática', 'Prof. Daniel');

-- Criando a tabela dos alunos
create table alunos (
	id_alunos INTEGER PRIMARY key not null,
  	nome varchar(40),
  	idade int,
  	aulas_id INTEGER,
  	data_log DATETIME
);

-- Inserindo dados dos alunos e suas aulas
INSERT INTO alunos (id_alunos, nome, idade, aulas_id) VALUES (1, 'Patríque', 12, 1);
INSERT INTO alunos (id_alunos, nome, idade, aulas_id) VALUES (2, 'Marcos', 13, 2);
INSERT INTO alunos (id_alunos, nome, idade, aulas_id) VALUES (3, 'Pedro', 12, 3);
INSERT INTO alunos (id_alunos, nome, idade, aulas_id) VALUES (4, 'Alícia', 11, 3);

-- Precisei de ajuda para tentar calcular a idade dos alunos
-- CREATE TRIGGER idade_update
-- after insert on alunos.idade
-- for each row 
-- BEGIN
--     INSERT INTO log_idade (id_aluno, idade, data_log)
--     VALUES (alunos.id_alunos, alunos.idade, NOW());
-- end;
	
-- Algumas pesquisas no BD

-- select nome, aulas_id from alunos
-- inner join aulas
-- on nm_aula.id_aula = alunos.aulas_id