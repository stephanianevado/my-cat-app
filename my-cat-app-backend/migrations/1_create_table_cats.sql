CREATE TABLE cats
(
    id varchar(50)
        CONSTRAINT firstkey PRIMARY KEY,
    name      varchar(40) NOT NULL,
    age       integer     NOT NULL
);
