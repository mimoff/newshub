insert into categories(name)
values ('News'), ('Computer');

insert into mediasources(name, type, url, category_id)
values ('RBC', 'rss', 'https://rssexport.rbc.ru/rbcnews/news/30/full.rss', 1),
       ('GITHUB', 'rss', 'https://github.blog/feed/', 2);

insert into stories(title, description, pub_time, url, mediasource_id)
values ('title_1', 'description_1', '20260101','url_1', 1);

insert into users(username, password, role)
values ('admin', 'admin', 'ROLE_ADMIN'),
       ('user', 'user', 'ROLE_USER');

insert into user_categories(user_id, category_id)
values (1, 1),   (1, 2),
       (2, 1),   (2, 2);

