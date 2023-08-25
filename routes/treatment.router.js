const express = require('express');
const TreatmentService = require('../services/treatment.service');
const router = express.Router()
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
