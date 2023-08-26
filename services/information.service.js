class InformationService {
  constructor() {
    this.information = [
      {
        id: "1",
        address: 'Avenida del puerto 240, Bahía Grande, Nordelta',
        whatsapp: '+5491134209650',
        times: {
          monday: 'Closed',
          tuesday: '11 a 20hs',
          wednesday: '10 a 21hs',
          thursday: '10 a 21hs',
          friday: '10 a 21hs',
          saturday: '10 a 21hs',
          sunday: '10 a 21hs',
        },
        copyright:
          'Copyright © Wyndham Spa. Todos los derechos reservados. By Estudio Equis.',
        whatsappText: 'Turnos y consultas por Whatsapp',
        whatsappLink:
          'https://api.whatsapp.com/send?phone=5491134209650&text=Hola%2C%20quiero%20realizar%20una%20consulta',
      },
    ];
  }

  async create(data) {
    const newInformation = {
      ...data,
    }
    this.information.push(newInformation);
    return newInformation;
  }

  async find() {
    return this.information;
  }

  async findOne(id) {
    return this.information.find((info) => info.id === id);
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
