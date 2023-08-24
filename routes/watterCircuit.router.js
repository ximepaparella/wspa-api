const expresss = require('express');
const router = expresss.Router()

router.get('/', (req, res) => {
  res.json({
    name: 'Circuito de Aguas',
    includes: 'INCLUYE UNA INFUSIÓN + PASTELERÍA DEL DÍA',
    clientPrice: 9000,
    visitorPrice: 15000,
});
});

module.exports = router;
