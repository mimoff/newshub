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
    primary key (id)
);

create table users (
    id bigserial,
    username varchar(255),
    password varchar(255),
    role varchar(255),
    primary key (id)
);

create table user_categories (
    user_id bigint references users(id) on delete cascade,
    category_id bigint references categories(id) on delete cascade,
    primary key (user_id, category_id)
);

