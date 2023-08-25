const expresss = require('express');
const router = expresss.Router();
const WatterCircuitService = require('../services/watterCircuit.service');
const service = new WatterCircuitService();

router.get('/', (req, res) => {
  const watterCircuits = service.find();
  res.json(watterCircuits);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const watterCircuit = service.findOne(id);
  res.json(watterCircuit);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
