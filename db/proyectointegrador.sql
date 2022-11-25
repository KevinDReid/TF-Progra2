
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios`  (
  `id_comentario` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_post` int UNSIGNED NULL DEFAULT NULL,
  `id_usuario` int UNSIGNED NULL DEFAULT NULL,
  `comentario` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`) USING BTREE,
  INDEX `id_post`(`id_post` ASC) USING BTREE,
  INDEX `id_usuario`(`id_usuario` ASC) USING BTREE,
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

INSERT INTO `comentarios` VALUES (1, 1, 3, 'thats a nice dough man', '2022-11-14 09:35:54', '2022-11-20 11:59:47');
INSERT INTO `comentarios` VALUES (2, 1, 2, 'Es de masa madre?', '2022-11-20 12:01:11', '2022-11-20 12:01:11');
INSERT INTO `comentarios` VALUES (3, 1, 1, 'I love making my own dough', '2022-11-20 12:01:20', '2022-11-20 12:01:41');
INSERT INTO `comentarios` VALUES (4, 1, 2, 'tiene una pinta!\"', '2022-11-20 12:01:25', '2022-11-20 12:01:45');
INSERT INTO `comentarios` VALUES (5, 2, 2, 'pruebaa', '2022-11-20 16:25:07', '2022-11-20 16:25:07');

DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id_post` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` int UNSIGNED NULL DEFAULT NULL,
  `name_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `likes_number` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_post`) USING BTREE,
  INDEX `id_usuario`(`id_usuario` ASC) USING BTREE,
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

INSERT INTO `post` VALUES (1, 1, 'pizzadough.jpeg', 'Una masaaa', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:29');
INSERT INTO `post` VALUES (2, 2, 'pizza1.jpeg', 'Pizza vegana, me encanta!', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:32');
INSERT INTO `post` VALUES (3, 3, 'tierlist-1.png', 'Que opinan de mi tier list?', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:34');
INSERT INTO `post` VALUES (5, 5, 'pizza-sauce-1.jpeg', 'Tuquito pa la pizza', 0, '2022-11-06 17:06:37', '2022-11-20 19:25:35');
INSERT INTO `post` VALUES (30, 66, 'foto-1669339995803.jpeg', 'JAJJA', 0, '2022-11-24 20:17:26', '2022-11-24 22:33:15');
INSERT INTO `post` VALUES (37, 68, 'foto-1669342485627.jpeg', 'fasfasdfa', 0, '2022-11-24 23:14:45', '2022-11-24 23:14:45');

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id_usuario` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `contrasenia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  `numero_documento` int UNSIGNED NOT NULL,
  `foto` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  `remember_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`) USING BTREE,
  UNIQUE INDEX `numero_documento`(`numero_documento` ASC) USING BTREE,
  UNIQUE INDEX `email`(`nombre` ASC) USING BTREE,
  UNIQUE INDEX `usuario`(`contrasenia` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

INSERT INTO `usuarios` VALUES (1, 'Jper', 'Juan perez', '0000000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'asd@asd.com', '2022-11-17', 1111111, 'e219f3d1bbf89e7fd608ccf0a7f7f143_c5_720x720.jpeg', '2022-11-06 17:06:37', '2022-11-24 23:28:22', NULL);
INSERT INTO `usuarios` VALUES (2, 'luisg', 'luis navas', '0000001\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'hola@asd.com', '2022-11-10', 1111112, '35c37305852f8778a24f0da28de61a2c.jpg', '2022-11-06 17:06:37', '2022-11-24 23:22:17', NULL);
INSERT INTO `usuarios` VALUES (3, 'briang', 'brian navas', '0000010\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'chau@asd.com', '2022-11-25', 1111121, 'cowboy-avatar-icon-Graphics-1.png', '2022-11-06 17:06:37', '2022-11-24 23:29:44', NULL);
INSERT INTO `usuarios` VALUES (4, 'sebper', 'sebastian pereira', '0000011\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'gmail@asd.com', '2022-11-30', 1111122, '1149378.png', '2022-11-06 17:06:37', '2022-11-24 23:30:40', NULL);
INSERT INTO `usuarios` VALUES (5, 'simalv', 'silon aubernial', '0000100\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'qwerty@asd.com', '2022-11-07', 1111211, 'images.png', '2022-11-06 17:06:37', '2022-11-24 23:31:50', NULL);
INSERT INTO `usuarios` VALUES (66, 'gg', 'rty undefined', '123456', 'rty@rty.com', '3456-02-01', 96325874, 'pfp-1669340786465.jpg', '2022-11-24 18:31:14', '2022-11-24 22:46:26', NULL);
INSERT INTO `usuarios` VALUES (67, 'ckquebyn', 'Kevin undefined', '$2a$10$mu7UaEzY4cyQtGlWrHhZmuqapADxhrkYYVBJjSxfShR0cnOP7RaU6', 'kevinreid301@gmail.com', '2002-12-09', 44599830, 'foto-1669326827648.jpeg', '2022-11-24 18:53:47', '2022-11-24 18:53:47', NULL);
INSERT INTO `usuarios` VALUES (68, 'asfasf', 'asdgasf undefined', '$2a$10$mt7T4m0RYCcUQnBRUwMhfu/XEYIQUevZDVZ0hY4KwwYlHgIJuL2E6', '123@123.com', '1612-12-16', 7658911, 'foto-1669341714063.jpeg', '2022-11-24 23:01:54', '2022-11-24 23:01:54', NULL);

SET FOREIGN_KEY_CHECKS = 1;
