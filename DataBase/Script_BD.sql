-- drop table if exists usuarios;

CREATE TABLE PERSONAS (
	id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido1 VARCHAR(50),
	apellido2 VARCHAR(50),
	cedula INT,
	fecha_nacimiento date,
	genero VARCHAR(20),
	estado VARCHAR(20),
);

CREATE TABLE ADMINISTRADORES (
	id SERIAL PRIMARY KEY,
    id_persona INT,
    correo VARCHAR(50),
	clave VARCHAR(10)
);

CREATE TABLE ROLES (
	id SERIAL PRIMARY KEY,
    nombre VARCHAR(20),
	descripcion VARCHAR(50)
);

CREATE TABLE TELEFONOS (
	id SERIAL PRIMARY KEY,
    nombre VARCHAR(20),
	descripcion VARCHAR(50)
);

CREATE TABLE AULAS (
	id SERIAL PRIMARY KEY,
    nombre VARCHAR(20),
	descripcion VARCHAR(50)
);

CREATE TABLE FUNCIONARIOS (
	id SERIAL PRIMARY KEY,
    id_persona INT,
	rol INT,
	aula INT,
	telefono INT,
	correo VARCHAR(50),
	clave VARCHAR(10)
);

CREATE TABLE ENCARGADOS (
	id SERIAL PRIMARY KEY,
    id_persona INT),
	id_telefono INT
);

CREATE TABLE PERSONAS_MENORES (
	id SERIAL PRIMARY KEY,
    id_persona INT,
	id_encargado INT,
	autorizacion BOOLEAN
);


-------------------------

ALTER TABLE ADMINISTRADORES
ADD FOREIGN KEY (id_persona) REFERENCES PERSONAS(id);

ALTER TABLE FUNCIONARIOS
ADD FOREIGN KEY (id_persona) REFERENCES PERSONAS(id),
ADD FOREIGN KEY (rol) REFERENCES ROLES(id),
ADD FOREIGN KEY (aula) REFERENCES AULAS(id),
ADD FOREIGN KEY (telefono) REFERENCES TELEFONOS(id);

ALTER TABLE ENCARGADOS
ADD FOREIGN KEY (id_persona) REFERENCES PERSONAS(id),
ADD FOREIGN KEY (id_telefono) REFERENCES TELEFONOS(id);

ALTER TABLE PERSONAS_MENORES
ADD FOREIGN KEY (id_persona) REFERENCES PERSONAS(id),
ADD FOREIGN KEY (id_encargado) REFERENCES ENCARGADOS(id);
-------------------------









INSERT INTO ADMINISTRADORES (id_persona, correo, clave) VALUES (1, 'correo@mail.com', '123');



select * from ADMINISTRADORES

