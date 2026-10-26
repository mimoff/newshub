create table categories (
    id bigserial,
    name varchar(255),
    primary key (id)
);

create table mediasources (
    id bigserial,
    name varchar(255) not null,
    type varchar(255) not null,
    url varchar(max) not null,
    category_id bigint not null references categories(id) on delete cascade,
    primary key (id),
    UNIQUE (url)
);

create table stories (
    id bigserial,
    title varchar(255),
    description varchar(max),
    pub_time timestamp,
    url varchar(max),
    mediasource_id bigint references mediasources (id) on delete cascade,
    primary key (id),
    UNIQUE (url)
);

create table users (
    id bigserial,
    username varchar(255),
    password varchar(255),
    role varchar(255),
    primary key (id)
);

/*
table categories {
  id bigint [primary key]
  name varchar [not null]
}

table mediasources {
  id bigint [primary key]
  name varchar [not null]
  type varchar [not null]
  url varchar [not null, unique]
  category_id bigint [not null]
}

Ref: categories.id <? mediasources.category_id

table stories {
  id bigint [primary key]
  title varchar [not null]
  description varchar
  pub_time timestamp [not null]
  url varchar [not null]
  mediasource_id bigint [not null]
}

Ref: mediasources.id <? stories.mediasource_id

table users {
  id bigint [primary key]
  username varchar
  password varchar
  role varchar
}
 */