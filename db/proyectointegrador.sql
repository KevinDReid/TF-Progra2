
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
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `posteos` (`id_post`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;


INSERT INTO `comentarios` VALUES (1, 1, 3, 'thats a nice dough man', '2022-11-14 09:35:54', '2022-11-20 11:59:47');
INSERT INTO `comentarios` VALUES (2, 1, 2, 'Es de masa madre?', '2022-11-20 12:01:11', '2022-11-20 12:01:11');
INSERT INTO `comentarios` VALUES (3, 1, 1, 'I love making my own dough', '2022-11-20 12:01:20', '2022-11-20 12:01:41');
INSERT INTO `comentarios` VALUES (4, 1, 2, 'tiene una pinta!\"', '2022-11-20 12:01:25', '2022-11-20 12:01:45');
INSERT INTO `comentarios` VALUES (5, 2, 2, 'pruebaa', '2022-11-20 16:25:07', '2022-11-20 16:25:07');


DROP TABLE IF EXISTS `posteos`;
CREATE TABLE `posteos`  (
  `id_post` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` int UNSIGNED NULL DEFAULT NULL,
  `name_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `likes_number` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_post`) USING BTREE,
  INDEX `id_usuario`(`id_usuario` ASC) USING BTREE,
  CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;


INSERT INTO `posteos` VALUES (1, 1, 'pizzadough.jpeg', 'Una masaaa', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:29');
INSERT INTO `posteos` VALUES (2, 2, 'pizza1.jpeg', 'Pizza vegana, me encanta!', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:32');
INSERT INTO `posteos` VALUES (3, 3, 'tierlist-1.png', 'Que opinan de mi tier list?', 0, '2022-11-06 17:06:37', '2022-11-20 19:24:34');
INSERT INTO `posteos` VALUES (5, 5, 'pizza-sauce-1.jpeg', 'Tuquito pa la pizza', 0, '2022-11-06 17:06:37', '2022-11-20 19:25:35');
INSERT INTO `posteos` VALUES (12, 1, 'foto-1668983269312.jpg', 'asdasdas', 0, '2022-11-20 19:27:49', '2022-11-20 19:27:49');
INSERT INTO `posteos` VALUES (13, 1, 'foto-1668989561781.png', 'HOLA TEST', 0, '2022-11-20 21:12:41', '2022-11-20 21:12:41');


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id_usuario` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `contrasenia` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;


INSERT INTO `usuarios` VALUES (1, 'Jper', 'Juan perez', '0000000', 'asd@asd.com', '2022-11-17', 1111111, 'https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU', '2022-11-06 17:06:37', '2022-11-20 17:32:17', NULL);
INSERT INTO `usuarios` VALUES (2, 'luisg', 'luis navas', '0000001', 'hola@asd.com', '2022-11-10', 1111112, 'https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo', '2022-11-06 17:06:37', '2022-11-20 17:32:19', NULL);
INSERT INTO `usuarios` VALUES (3, 'briang', 'brian navas', '0000010', 'chau@asd.com', '2022-11-25', 1111121, 'https://i.picsum.photos/id/640/100/100.jpg?hmac=w_T17sT5OZPBWOrXtiRegsQxm_lfJ942_gVgOyO5sIY', '2022-11-06 17:06:37', '2022-11-20 17:32:22', NULL);
INSERT INTO `usuarios` VALUES (4, 'sebper', 'sebastian pereira', '0000011', 'gmail@asd.com', '2022-11-30', 1111122, 'https://i.picsum.photos/id/964/100/100.jpg?hmac=_id-TbaudbdfOV6_2_XIt8DpumpQJ7SdJFJ-m7Od_wU', '2022-11-06 17:06:37', '2022-11-20 17:32:25', NULL);
INSERT INTO `usuarios` VALUES (5, 'simalv', 'silon aubernial', '0000100', 'qwerty@asd.com', '2022-11-07', 1111211, 'https://i.picsum.photos/id/524/100/100.jpg?hmac=0avlj_3ml3OBJI4GpocHVRDlhSeP6srgGRuPCIUaCy4', '2022-11-06 17:06:37', '2022-11-20 17:32:27', NULL);
INSERT INTO `usuarios` VALUES (34, 'prueba', 'prueba prueba', '$2a$10$RVkKXVqLk7AYOOI6Mv6hx.67pnvYN9l2w8jltVkHe2d', 'kevinreid301@gmail.com', '2022-11-08', 561561, 'asd', '2022-11-20 21:40:33', '2022-11-20 21:40:33', NULL);
INSERT INTO `usuarios` VALUES (35, 'asfasfasfa', 'asdghadfasf asfasfasfas', '$2a$10$kyKTKuO/ONHPzXby0mUF0.0m8K8DLaoYoV90/KJh6sv', '123@132.com', '2022-10-31', 651156161, 'asd', '2022-11-20 22:26:35', '2022-11-20 22:26:35', NULL);

SET FOREIGN_KEY_CHECKS = 1;
