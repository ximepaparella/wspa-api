const expresss = require('express');
const router = expresss.Router()

router.get('/', (req, res) => {
  res.json( [{
    id: 1,
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
            name: 'Masaje a elección',
            duration: 50
        },
        {
            id: 2,
            name: 'Reflexología',
            duration: 25
        },
        {
            id: 3,
            name: 'Circuito de Aguas',
            duration: 120
        },
    ]
},{
  id: 2,
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
          name: 'Masaje a elección',
          duration: 50
      },
      {
          id: 2,
          name: 'Reflexología',
          duration: 25
      },
      {
          id: 3,
          name: 'Circuito de Aguas',
          duration: 120
      },
  ]
}
]);
});

router.get('/:spaDayId', (req, res) => {
  const {spaDayId} = req.params;
  res.json({
    spaDayId,
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
            name: 'Masaje a elección',
            duration: 50
        },
        {
            id: 2,
            name: 'Reflexología',
            duration: 25
        },
        {
            id: 3,
            name: 'Circuito de Aguas',
            duration: 120
        },
    ]
});
});

module.exports = router;
