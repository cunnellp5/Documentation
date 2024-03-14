# Object-Relational Mapping aka ORM

## Description

ORM is a technique that lets us query and manipulate data from a database using an object-oriented paradigm.

This abstracts away writing SQL commands

## Example of difference

SQL statment:

```SQL
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;
```

An ORM:

```ORM
user = User.objects.get(id=1)
user.email = 'newemail@example.com'
user.save()
```

## Pros and Cons

#### pros

- ORM is DB agnostic
- Can build regular objects that mirror the DB schema
- ORMs automate basic CRUD actions
- Easier because its Object-oriented

#### cons

- Could lead to large queries without realizing
- Might be slower than SQL

## List of ORMs for JavaScript

- [Knex.js: SQL Query Builder](https://knexjs.org/)
- [Sequelize](https://sequelize.org/)
- [Bookshelf](https://bookshelfjs.org/)
- [Waterline](https://waterlinejs.org/)
- [Objection.js](https://vincit.github.io/objection.js/)
- [Mongoose](https://mongoosejs.com/)
- [Typegoose](https://typegoose.github.io/typegoose/)
- [TypeORM](https://typeorm.io/)
- [MikroORM](https://mikro-orm.io/)
- [Prisma](https://www.prisma.io/)
