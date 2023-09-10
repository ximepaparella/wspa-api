const boom = require('@hapi/boom');
const {models}  = require('../libs/sequelize');

class UsersService {
  constructor() {

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
    const rta = await models.User.findAll();
    return rta;
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
