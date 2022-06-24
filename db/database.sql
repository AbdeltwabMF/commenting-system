CREATE DATABASE cdbd;

CREATE TABLE comment(
  comment_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
	comment_parent INTEGER NOT NULL DEFAULT -1,
  comment_body TEXT NOT NULL,
  comment_rate INTEGER NOT NULL DEFAULT 0,
  comment_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comment VALUES (1, -1, 'Hola, mom!', 4, '2022-07-10 01:22:11');
INSERT INTO comment VALUES (2, 11, 'Hola, son.', 9, '2022-07-12 13:36:22');
INSERT INTO comment VALUES (3, -1, 'I love you, mom', 22, '2022-07-13 15:40:43');
