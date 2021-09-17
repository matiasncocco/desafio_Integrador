INSERT INTO albumes (id, nombre, duracion) VALUES (1, 'Bad', 48);
INSERT INTO albumes (id, nombre, duracion) VALUES (2, 'Innuendo', 53);
INSERT INTO albumes (id, nombre, duracion) VALUES (3, 'The Soft Side Of Jazz', 45);
INSERT INTO albumes (id, nombre, duracion) VALUES (4, 'London Calling', 64);

INSERT INTO artistas (id, nombre, apellido) VALUES (1, 'Michael', 'Jackson');
INSERT INTO artistas (id, nombre, apellido) VALUES (2, 'Freddie', 'Mercury');
INSERT INTO artistas (id, nombre, apellido) VALUES (3, 'Gary', 'Smith');
INSERT INTO artistas (id, nombre, apellido) VALUES (4, 'Joe', 'Strummer');

INSERT INTO generos (id, name) VALUES (1, 'Pop');
INSERT INTO generos (id, name) VALUES (2, 'Rock');
INSERT INTO generos (id, name) VALUES (3, 'Jazz');
INSERT INTO generos (id, name) VALUES (4, 'Punk');

INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (0, 'Leave Me Alone', 4, null, null, 1, 1, 1);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (1, 'Smooth Criminal', 5, null, null, 1, 1, 1);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (2, 'Im Going Slightly Mad', 4, null, null, 2, 2, 2);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (3, 'These Are The Days Of Our Lives', 5, null, null, 2, 2, 2);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (4, 'Autumn Leaves', 5, null, null, 3, 3, 3);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (5, 'A Foggy Day', 5, null, null, 3, 3, 3);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (6, 'Clampdown', 5, null, null, 4, 4, 4);
INSERT INTO canciones (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) VALUES (7, 'Death or Glory', 5, null, null, 4, 4, 4);


