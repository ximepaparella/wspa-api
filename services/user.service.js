class UsersService {
  constructor() {
    this.users = [
      {
        id: "1",
        name: 'John Doe',
        password: '123456',
        email: 'email@email.com',
        rol: 'admin',
      },
      {
        id: "2",
        name: 'John Doe',
        password: '123456',
        email: 'email@email.com',
        rol: 'admin',
      },
    ];
  }

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((user) => user.id === id);
  }

  update() {}

  delete() {}
}

module.exports = UsersService;
