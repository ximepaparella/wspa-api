class SpaDaysService {
  constructor() {
    this.spaDays = [ {
      id: "1",
      featuredHome: true,
      featuredImage: 'https://via.placeholder.com/300x200',
      discount: 'MARTES Y MIÉRCOLES DE MUJERES 20% OFF',
      name: 'W DAY SPA',
      duration: '3.30hs',
      priceOnly: 33000,
      priceDouble: 59400,
      coffeeBreak: true,
      giftVoucherOnlyId: 583,
      giftVoucherDoubleId: 584,

      services: [
        {
          id: 1,
          name: 'Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado',
        },
        {
          id: 2,
          name: 'Sala de relax con tumbonas térmicas',
        },
        {
          id: 3,
          name: 'Sala de hidratación',
        },
        {
          id: 4,
          name: 'Terraza con solárium y reposeras con vista a la Bahía Grande',
        },
      ],
      treatments: [
        {
          id: 1,
          name: 'Masaje a elección',
          duration: 50,
        },
        {
          id: 2,
          name: 'Reflexología',
          duration: 25,
        },
        {
          id: 3,
          name: 'Circuito de Aguas',
          duration: 120,
        },
      ],
    },
    {
      id: "2",
      featuredHome: true,
      featuredImage: 'https://via.placeholder.com/300x200',
      discount: 'MARTES Y MIÉRCOLES DE MUJERES 20% OFF',
      name: 'W DAY SPA',
      duration: '3.30hs',
      priceOnly: 33000,
      priceDouble: 59400,
      coffeeBreak: true,
      giftVoucherOnlyId: 583,
      giftVoucherDoubleId: 584,

      services: [
        {
          id: 1,
          name: 'Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado',
        },
        {
          id: 2,
          name: 'Sala de relax con tumbonas térmicas',
        },
        {
          id: 3,
          name: 'Sala de hidratación',
        },
        {
          id: 4,
          name: 'Terraza con solárium y reposeras con vista a la Bahía Grande',
        },
      ],
      treatments: [
        {
          id: 1,
          name: 'Masaje a elección',
          duration: 50,
        },
        {
          id: 2,
          name: 'Reflexología',
          duration: 25,
        },
        {
          id: 3,
          name: 'Circuito de Aguas',
          duration: 120,
        },
      ],
    },];
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
    return this.spaDays;
  }

  async findOne(id){
    return this.spaDays.find(spaDay => spaDay.id === id);
  }

  async update(id, changes) {
    const index = this.spaDays.findIndex(spaDay => spaDay.id === id);
    if(index === -1) {
      throw new Error('SpaDay not found');
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
      throw new Error('SpaDay not found');
    }
    this.spaDays.splice(index, 1)
    return {
      message: 'SpaDay Eliminado',
      id
    }
  }

}

module.exports = SpaDaysService;
