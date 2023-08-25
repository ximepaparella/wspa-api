const expresss = require('express');
const router = expresss.Router()

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'Circuito de Aguas',
    includes: 'INCLUYE UNA INFUSIÓN + PASTELERÍA DEL DÍA',
    clientPrice: 9000,
    visitorPrice: 15000,
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
