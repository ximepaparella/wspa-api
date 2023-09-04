const boom = require ('@hapi/boom');

const pool = require('../libs/postgres.pool');
class InformationService {
  constructor() {
    this.information = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err)
    });
  }

  async create(data) {
    const newInformation = {
      ...data,
    }
    this.information.push(newInformation);
    return newInformation;
  }

  async find() {
    const query = 'SELECT * FROM information';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const information = this.information.find((info) => info.id === id);
    if(!information) {
      throw boom.notFound('Information not found');
    }
    return information;
  }

  async update(changes) {
   const information = this.information[0];
   const informationUpdated = {
      ...information,
      ...changes
   }
   return informationUpdated;
  }

  delete() {}
}

module.exports = InformationService;
