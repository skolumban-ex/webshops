GET url/products/all -all products
POST url/products/buy/{name}?quantity={x} -- lower the quantity
POST url/sync/products --sync the data

src/config/config.service.ts - you can set your wanted databases

/-------------ESSENTIAL TABLE FOR CURRENT BUILD --------------------------------------------/
DROP TABLE IF EXISTS "product";

CREATE TABLE "product" (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" VARCHAR NOT NULL UNIQUE,
	"price" REAL NOT NULL,
	"quantity" INTEGER NOT NULL DEFAULT 0
);

INSERT INTO product (name, quantity, price) VALUES
('Apple', 100, 2),
('Banana', 150, 3),
('Orange', 120, 6),
('Grapes', 80, 2),
('Strawberry', 200, 8);
/--------------------------------------------------------------------/
sql code for testing

the items and orders are still under development so you wont need those tables(hopefully)
