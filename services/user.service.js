const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
class UsersService {
  constructor() {
    this.users = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err);
    });
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
    const query = 'SELECT * FROM public.users';
    const rta = await this.pool.query(query);
    return rta.rows;
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
