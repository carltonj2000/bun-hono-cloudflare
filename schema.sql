drop table if exists customers;

create table
    customers (id INTEGER primary key, name TEXT, email TEXT);

insert into
    customers (name, email)
values
    ("name1", 'a@b.c'),
    ("name2", 'd@e.f');