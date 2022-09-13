CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios(
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(100),
usuario VARCHAR(50),
contrasenia VARCHAR(50),
fecha_nacimiento DATE NOT NULL,
numero_documento INT UNSIGNED NOT NULL, 
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

INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default);
INSERT INTO posteos VALUES (default, default, '', '', default, default)


/* DROP SCHEMA proyectoIntegrador */