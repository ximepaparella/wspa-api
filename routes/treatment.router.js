const express = require('express');
const TreatmentService = require('../services/treatment.service');
const router = express.Router();
const service = new TreatmentService();

router.get('/', (req, res) => {
  const treatments = service.find();
  res.json(treatments);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const treatment = service.findOne(id);
  res.json(treatment);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const treatment = service.update(id, body);
  res.json({
    message: 'updated',
    treatment
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const treatment = service.update(id, body);
  res.json({
    message: 'updated',
    treatment
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json({
    rta
  });
});

module.exports = router;
