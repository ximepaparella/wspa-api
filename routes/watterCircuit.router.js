const expresss = require('express');
const router = expresss.Router();
const WatterCircuitService = require('../services/watterCircuit.service');
const service = new WatterCircuitService();

router.get('/', (req, res) => {
  const watterCircuits = service.find();
  res.json(watterCircuits);
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const watterCircuit = await service.findOne(id);
  res.json(watterCircuit);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newWatterCircuit = await service.create(body);
  res.status(201).json(newWatterCircuit);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const watterCircuit = await service.update(id, body);
  res.json({
    message: 'updated',
    watterCircuit
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const watterCircuit = await service.update(id, body);
  res.json({
    message: 'updated',
    watterCircuit
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    rta
  });
});

module.exports = router;
