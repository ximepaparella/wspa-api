const boom = require ('@hapi/boom');

const pool = require('../libs/postgres.pool');

class WatterCircuitService {
  constructor() {
    this.watterCircuits = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log('Unexpected error on idle client', err)
    });
  }

  create(data) {
    const newWatterCircuit = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
    }
    this.watterCircuits.push(newWatterCircuit);
    return newWatterCircuit;
  }

  async find() {
    const query = 'SELECT * FROM watter_circuits';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id){
    const watterCircuit = this.treatments.find(treatment => treatment.id === id);
    if(!watterCircuit) {
      throw boom.notFound('Treatment not found');
    }
    return watterCircuit;
  }

  async update(id, changes) {
    const index = this.watterCircuits.findIndex(watterCircuit => watterCircuit.id === id);
    if(index === -1) {
      throw boom.notFound('Treatment not found');
    }
    const watterCircuit = this.watterCircuits[index];
    this.watterCircuits[index] = {
      ...watterCircuit,
      ...changes
    }
    return this.watterCircuits[index];
  }

  async delete(id) {
    const index = this.watterCircuits.findIndex(watterCircuit => watterCircuit.id === id);
    if(index === -1) {
      throw boom.notFound('Treatment not found');
    }
    this.watterCircuits.splice(index, 1)
    return {
      message: 'Circuito de Agua Eliminado',
      id
    }
  }
}

module.exports = WatterCircuitService;
