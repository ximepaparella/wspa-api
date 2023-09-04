const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');
class UsersService {
  constructor() {
    this.users = [
      {
        id: '1',
        name: 'John Doe',
        password: '123456',
        email: 'email@email.com',
        rol: 'admin',
      },
      {
        id: '2',
        name: 'John Doe',
        password: '123456',
        email: 'email@email.com',
        rol: 'admin',
      },
    ];
  }

  async create(data) {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM users');
    return await rta.rows;
  }

  async findOne(id){
  const user = this.users.find(user => user.id === id);
  if(!user) {
    throw boom.notFound('User not found');
  }
  return user;
}

  async update(id, changes) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return {
      message: 'User deleted',
      id,
    };
  }
}

module.exports = UsersService;
