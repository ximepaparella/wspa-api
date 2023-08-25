const express = require('express');
const router = express.Router();
const SpaDayService = require('../services/spaDay.service');
const service = new SpaDayService();

router.get('/', (req, res) => {
  const spaDays = service.find();
  res.json(spaDays);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const spaDay = service.findOne(id);
  res.json(spaDay);
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
