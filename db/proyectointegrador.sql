

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
) ENGINE = InnoDB AUTO_INCREMENT = 65 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;


INSERT INTO `comentarios` VALUES (64, 37, 68, 'asdasdas', '2022-11-24 23:43:54', '2022-11-24 23:43:54');


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

INSERT INTO `usuarios` VALUES (66, 'gg', 'rty undefined', '123456', 'rty@rty.com', '3456-02-01', 96325874, 'pfp-1669340786465.jpg', '2022-11-24 18:31:14', '2022-11-24 22:46:26', NULL);
INSERT INTO `usuarios` VALUES (67, 'ckquebyn', 'Kevin undefined', '$2a$10$mu7UaEzY4cyQtGlWrHhZmuqapADxhrkYYVBJjSxfShR0cnOP7RaU6', 'kevinreid301@gmail.com', '2002-12-09', 44599830, 'foto-1669326827648.jpeg', '2022-11-24 18:53:47', '2022-11-24 18:53:47', NULL);
INSERT INTO `usuarios` VALUES (68, 'asfasf', 'asdgasf undefined', '$2a$10$mt7T4m0RYCcUQnBRUwMhfu/XEYIQUevZDVZ0hY4KwwYlHgIJuL2E6', '123@123.com', '1612-12-16', 7658911, 'foto-1669341714063.jpeg', '2022-11-24 23:01:54', '2022-11-24 23:01:54', NULL);

SET FOREIGN_KEY_CHECKS = 1;
