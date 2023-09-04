const boom = require ('@hapi/boom');

const pool = require('../libs/postgres.pool');
class MembershipService {
  constructor() {
    this.memberships = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err)
    });
  }

  async create(data) {
    const newMembership = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
    }
    this.memberships.push(newMembership);
    return newMembership;
  }

  async find() {
    const query = 'SELECT * FROM memberships';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const membership = this.memberships.find((membership) => membership.id === id);
    if(!membership) {
      throw boom.notFound('Membership not found');
    }
    return membership;
  }

  async update(id, changes) {
    const index = this.memberships.findIndex((membership) => membership.id === id);
    if (index === -1) {
      throw boom.notFound('Membership not found');
    }
    const membership = this.memberships[index];
    this.memberships[index] = {
      ...membership,
      ...changes,
    }
    return this.memberships[index];
  }

  async delete(id) {
    const index = this.memberships.findIndex((membership) => membership.id === id);
    if (index === -1) {
      throw boom.notFound('Membership not found');
    }
    this.memberships.splice(index, 1)
    return {
      message: 'Membership deleted',
      id
    }
  }
}

module.exports = MembershipService;
