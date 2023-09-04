const boom = require ('@hapi/boom');

const pool = require('../libs/postgres.pool');

class SpaDaysService {
  constructor() {
    this.spaDays = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err)
    });
  }

  async create(data) {
    const newSpaDay = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
    }
    this.spaDays.push(newSpaDay);
    return newSpaDay;
  }

  async find() {
    const query = 'SELECT * FROM spa_days';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id){
    const spaDay = this.spaDays.find(spaDay => spaDay.id === id);
    if(!spaDay) {
      throw boom.notFound('Spa Day not found');
    }
    return spaDay;
  }

  async update(id, changes) {
    const index = this.spaDays.findIndex(spaDay => spaDay.id === id);
    if(index === -1) {
      throw boom.notFound('SpaDay not found');
    }
    const spaDay = this.spaDays[index];
    this.spaDays[index] = {
      ...spaDay,
      ...changes
    }
    return this.spaDays[index];
  }

  async delete(id) {
    const index = this.spaDays.findIndex(spaDay => spaDay.id === id);
    if(index === -1) {
      throw boom.notFound('SpaDay not found');
    }
    this.spaDays.splice(index, 1)
    return {
      message: 'SpaDay Eliminado',
      id
    }
  }

}

module.exports = SpaDaysService;
