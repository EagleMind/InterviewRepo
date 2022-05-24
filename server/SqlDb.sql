CREATE TABLE postgres (
	user_id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	lastname VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	validated BOOLEAN NOT NULL,
    bearer_token VARCHAR ( 255 ) NULL,
    validation_date VARCHAR ( 255 ) NULL,
    updated_at TIMESTAMP NULL
);


-- Inserting data
INSERT INTO postgres VALUES (1,'Hassen','Ben Mbarek','hassen.ben.mbarek@gmail.com',false,NULL,NULL)
INSERT INTO postgres VALUES (1,'tester','Test','hassen.test.mbarek@gmail.com',false,NULL,NULL)