const expresss = require('express');
const router = expresss.Router();
const WatterCircuitService = require('../services/watterCircuit.service');
const service = new WatterCircuitService();

router.get('/', async (req, res) => {
  const watterCircuits = await service.find();
  res.json(watterCircuits);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const watterCircuit = await service.findOne(id);
    res.json(watterCircuit);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newWatterCircuit = await service.create(body);
    res.status(201).json(newWatterCircuit);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const watterCircuit = await service.update(id, body);
    res.json({
      message: 'updated',
      watterCircuit,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const watterCircuit = await service.update(id, body);
    res.json({
      message: 'updated',
      watterCircuit,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json({
      rta,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
