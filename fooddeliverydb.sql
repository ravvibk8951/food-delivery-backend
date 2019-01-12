CREATE TABLE customer (
    id int  NOT NULL,
    customer_name varchar(255)  NOT NULL,
    city_id int  NOT NULL,
    address varchar(255)  NOT NULL,
    contact_phone varchar(255)  NOT NULL,
    email varchar(255)  NOT NULL,
    confirmation_code varchar(255)  NOT NULL,
    password varchar(255)  NOT NULL,
    time_joined timestamp  NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (id)
);