const expresss = require('express');
const app  = expresss();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json([{
      id: 1,
      name:'John Doe',
      password: '123456',
      email:'email@email.com',
      rol: 'admin'
  },
  {
    id: 2,
    name:'John Doe',
    password: '123456',
    email:'email@email.com',
    rol: 'admin'
}
]);
});


app.get('users/:userId', (req, res) => {
  const {userId} = req.params;
  res.json({
    userId,
      name:'John Doe',
      password: '123456',
      email:'email@email.com',
      rol: 'admin'
  }
  );
});


app.get('/spa-days', (req, res) => {
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

app.get('/spa-days/:spaDayId', (req, res) => {
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

app.get('/membership', (req, res) => {
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

app.get('/watter-circuit', (req, res) => {
  res.json({
    name: 'Circuito de Aguas',
    includes: 'INCLUYE UNA INFUSIÓN + PASTELERÍA DEL DÍA',
    clientPrice: 9000,
    visitorPrice: 15000,
});
});

app.get('/information', (req, res) => {
  res.json({
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
    copyright: 'Copyright © Wyndham Spa. Todos los derechos reservados. By Estudio Equis.',
    whatsappText: 'Turnos y consultas por Whatsapp',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5491134209650&text=Hola%2C%20quiero%20realizar%20una%20consulta',
});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
