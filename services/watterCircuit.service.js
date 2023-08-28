const boom = require ('@hapi/boom');

class WatterCircuitService {
  constructor() {
    this.watterCircuits = [
      {
        id: "1",
        name: 'Circuito de Aguas',
        includes: 'INCLUYE UNA INFUSIÓN + PASTELERÍA DEL DÍA',
        clientPrice: 9000,
        visitorPrice: 15000,
      },
    ];
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
    return this.watterCircuits;
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
