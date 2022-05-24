CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	lastname VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	validated BOOLEAN NOT NULL,
  bearer_token VARCHAR ( 255 ) NULL,
  validation_date VARCHAR ( 255 ) NULL,
);
