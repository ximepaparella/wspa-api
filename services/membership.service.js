const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class MembershipService {
  constructor() {

  }

  async create(data) {
    const newMembership = await models.Membership.create(data);
    return newMembership;
  }

  async find() {
    const rta = await models.Membership.findAll();
    return rta;
  }

  async findOne(id) {
    const membership = await models.Membership.findByPk(id);
    if (!membership) {
      throw boom.notFound('Membership not found');
    }
    return membership;
  }

  async update(id, changes) {
    const membership = await this.findOne(id);
    const rta = await membership.update(changes);
    return rta;
  }

  async delete(id) {
    const membership = await this.findOne(id);
    await membership.destroy();
    return {id};
  }
}

module.exports = MembershipService;
