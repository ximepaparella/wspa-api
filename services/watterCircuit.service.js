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

  create() {}

  find() {
    return this.watterCircuits;
  }

  findOne(id) {
    return this.watterCircuits.find((circuit) => circuit.id === id);
  }

  update() {}

  delete() {}
}

module.exports = WatterCircuitService;
