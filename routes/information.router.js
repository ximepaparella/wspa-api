const expresss = require('express');
const router = expresss.Router()

router.get('/', (req, res) => {
  res.json({
    id: 1,
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
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
