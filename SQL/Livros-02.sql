-- Criando a tabela de autores
CREATE TABLE autor(
  id_autor SERIAL PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,  
  sexo CHAR(1)
  )
  -- Inserindo dados na tabela
  INSERT INTO autor (nome, sexo) VALUES 
  ('Sarah J. Maas', F),
  ('J.K. Rowling', F),
  ('George R.R. Martin', M),
  ('J.R.R. Tolkien', M),
  ('Agatha Christie', F),
  ('Stephen King', M),
  ('Jane Austen', F);

-- Criando tabela livros sem popular
CREATE TABLE livro(
  id_livro SERIAL PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  genero VARCHAR(20)
  )
  
