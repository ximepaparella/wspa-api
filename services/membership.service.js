const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class MembershipService {
  constructor() {

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
    const rta = await models.Membership.findAll();
    return rta;
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
