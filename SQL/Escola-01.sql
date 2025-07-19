-- 1. crie uma tabela chamada ALUNO;  
-- 2. defina os atributos da tabela;
-- 3. adicione a chave primária de nome ID (identificador);
-- 4. adicione um atributo nome do tipo varchar;
-- 5. adicione um atributo e-mail do tipo varchar;
-- 6. adicione um atributo endereço do tipo varchar.


create table Aluno(
    id_aluno PRIMARY KEY,
    nome varchar(50),
    email varchar(25),
    endereço VARCHAR(65)
);