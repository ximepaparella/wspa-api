const express = require('express');
const router = express.Router();
const SpaDayService = require('../services/spaDay.service');
const service = new SpaDayService();

router.get('/', (req, res) => {
  const spaDays = service.find();
  res.json(spaDays);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const spaDay = await service.findOne(id);
  res.json(spaDay);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newSpaDay = await service.create(body);
  res.status(201).json(newSpaDay);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const spaDay = await service.update(id, body);
  res.json({
    message: 'updated',
    spaDay
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const spaDay = await service.update(id, body);
  res.json({
    message: 'updated',
    spaDay
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
