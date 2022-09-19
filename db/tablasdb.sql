CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios(
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
usuario VARCHAR(50) UNIQUE,
contrasenia VARCHAR(50),
fecha_nacimiento DATE NOT NULL,
numero_documento INT UNSIGNED NOT NULL UNIQUE, 
foto VARCHAR (1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE posteos(
id_post INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
name_img VARCHAR(100) NOT NULL,
descripcion VARCHAR (1000),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE comentarios(
id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_post INT UNSIGNED,
id_usuario INT UNSIGNED,
comentario VARCHAR (1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (id_post) REFERENCES posteos(id_post),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


INSERT INTO usuarios VALUES (default, 'Jper','Juan perez','0000000','asd@asd.com','01-01-1000','1111111','https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU', default, default);
INSERT INTO usuarios VALUES (default, 'luisg','luis navas','0000001','hola@asd.com','01-01-1000','1111112','https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo', default, default);
INSERT INTO usuarios VALUES (default, 'briang','brian navas','0000010','chau@asd.com','01-01-1000','1111121','https://i.picsum.photos/id/640/100/100.jpg?hmac=w_T17sT5OZPBWOrXtiRegsQxm_lfJ942_gVgOyO5sIY', default, default);
INSERT INTO usuarios VALUES (default, 'sebper','sebastian pereira','0000011','gmail@asd.com','01-01-1000','1111122','https://i.picsum.photos/id/964/100/100.jpg?hmac=_id-TbaudbdfOV6_2_XIt8DpumpQJ7SdJFJ-m7Od_wU', default, default);
INSERT INTO usuarios VALUES (default, 'simalv','silon aubernial','0000100','qwerty@asd.com','01-01-1000','1111211','https://i.picsum.photos/id/524/100/100.jpg?hmac=0avlj_3ml3OBJI4GpocHVRDlhSeP6srgGRuPCIUaCy4', default, default);

INSERT INTO posteos VALUES (default, 1, '/images/pizzadough.jpeg', 'Una masaaa', default, default);
INSERT INTO posteos VALUES (default, 2, '/images/pizza1.jpeg', 'Pizza vegana, me encanta!', default, default);
INSERT INTO posteos VALUES (default, 3, '/images/tierlist-1.png', 'Que opinan de mi tier list?', default, default);
INSERT INTO posteos VALUES (default, 4, '/images/pizza-ugi-s.jpeg', 'Dudosa pizzeria, tengan cuidado', default, default);
INSERT INTO posteos VALUES (default, 5, '/images/pizza-sauce-1.jpeg', 'Tuquito pa la pizza', default, default);
INSERT INTO posteos VALUES (default, 6, '/images/dominos.jpeg', 'foto del maestro pizzero, miguel, un groso!', default, default);
INSERT INTO posteos VALUES (default, 7, '/images/pizza-sauce-2.webp', 'Paso a paso', default, default);
INSERT INTO posteos VALUES (default, 8, '/images/pizza-hut.jpeg', 'Pizza Hut a morir', default, default);
INSERT INTO posteos VALUES (default, 9, '/images/tierlist-2.png', 'La tier list de pizzas definitiva, no acepto discusiones.', default, default);
INSERT INTO posteos VALUES (default, 10, '/images/papa-johns.jpeg', 'Miren el quesooo', default, default);

INSERT INTO comentarios VALUES (default, 1, 1, 'thats a nice dough man', default, default);
INSERT INTO comentarios VALUES (default, 1, 1, 'Es de masa madre?', default, default);
INSERT INTO comentarios VALUES (default, 1, 1, 'I love making my own dough', default, default);
INSERT INTO comentarios VALUES (default, 1, 1, 'tiene una pinta!', default, default)

/* DROP SCHEMA proyectoIntegrador */