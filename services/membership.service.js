const boom = require ('@hapi/boom');
class MembershipService {
  constructor() {
    this.memberships = [
      {
        id: "1",
        validationText: 'VÁLIDO DURANTE 30 DÍAS.',
        featuredImage: 'https://via.placeholder.com/300x200',
        name: 'MEMBRESÍA WSPA',
        price: 15000,
        giftVoucherLink:
          'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc',
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
            name: '1 sesión de masajes a Elección 50 durante todo el mes contratado.',
            duration: 50,
          },
          {
            id: 3,
            name: 'Acceso al Circuito de Aguas 120 durante todo el mes contratado',
            duration: 120,
          },
        ],
      },
      {
        id: "2",
        validationText: 'VÁLIDO DURANTE 30 DÍAS.',
        featuredImage: 'https://via.placeholder.com/300x200',
        name: 'MEMBRESÍA WSPA',
        price: 15000,
        giftVoucherLink:
          'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc',
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
            name: '1 sesión de masajes a Elección 50 durante todo el mes contratado.',
            duration: 50,
          },
          {
            id: 3,
            name: 'Acceso al Circuito de Aguas 120 durante todo el mes contratado',
            duration: 120,
          },
        ],
      },
    ];
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
    return this.memberships;
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
