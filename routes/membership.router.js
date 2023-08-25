const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.json( [{
    id: 1,
    validationText: 'VÁLIDO DURANTE 30 DÍAS.',
    featuredImage: 'https://via.placeholder.com/300x200',
    name: 'MEMBRESÍA WSPA',
    price: 15000,
    giftVoucherLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc',
    services: [
        {
            id: 1,
            name: 'Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado',

        },
        {
            id: 2,
            name: 'Sala de relax con tumbonas térmicas'
        },
        {
            id:3,
            name: 'Sala de hidratación',
        },
        {
            id:4,
            name: 'Terraza con solárium y reposeras con vista a la Bahía Grande',
        }
    ],
    treatments: [
        {
            id: 1,
            name: '1 sesión de masajes a Elección 50 durante todo el mes contratado.',
            duration: 50
        },
        {
            id: 3,
            name: 'Acceso al Circuito de Aguas 120 durante todo el mes contratado',
            duration: 120
        },
    ]
},{
  id: 2,
  validationText: 'VÁLIDO DURANTE 30 DÍAS.',
  featuredImage: 'https://via.placeholder.com/300x200',
  name: 'MEMBRESÍA WSPA',
  price: 15000,
  giftVoucherLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc',
  services: [
      {
          id: 1,
          name: 'Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado',

      },
      {
          id: 2,
          name: 'Sala de relax con tumbonas térmicas'
      },
      {
          id:3,
          name: 'Sala de hidratación',
      },
      {
          id:4,
          name: 'Terraza con solárium y reposeras con vista a la Bahía Grande',
      }
  ],
  treatments: [
      {
          id: 1,
          name: '1 sesión de masajes a Elección 50 durante todo el mes contratado.',
          duration: 50
      },
      {
          id: 3,
          name: 'Acceso al Circuito de Aguas 120 durante todo el mes contratado',
          duration: 120
      },
  ]
}
]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    validationText: 'VÁLIDO DURANTE 30 DÍAS.',
    featuredImage: 'https://via.placeholder.com/300x200',
    name: 'MEMBRESÍA WSPA',
    price: 15000,
    giftVoucherLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847b62931d017b9c68ce3b29cc',
    services: [
        {
            id: 1,
            name: 'Piscina in/out climatizada con cascadas cervicales e hidromasaje integrado',

        },
        {
            id: 2,
            name: 'Sala de relax con tumbonas térmicas'
        },
        {
            id:3,
            name: 'Sala de hidratación',
        },
        {
            id:4,
            name: 'Terraza con solárium y reposeras con vista a la Bahía Grande',
        }
    ],
    treatments: [
        {
            id: 1,
            name: '1 sesión de masajes a Elección 50 durante todo el mes contratado.',
            duration: 50
        },
        {
            id: 3,
            name: 'Acceso al Circuito de Aguas 120 durante todo el mes contratado',
            duration: 120
        },
    ]
  })
});


router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message:'created',
    data: body
  })
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});


module.exports = router;
