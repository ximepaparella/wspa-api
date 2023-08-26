const express = require('express');
const TreatmentService = require('../services/treatment.service');
const router = express.Router();
const service = new TreatmentService();

router.get('/', (req, res) => {
  const treatments = service.find();
  res.json(treatments);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const treatment = await service.findOne(id);
  res.json(treatment);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const treatment = await service.update(id, body);
  res.json({
    message: 'updated',
    treatment
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const treatment = await service.update(id, body);
  res.json({
    message: 'updated',
    treatment
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
