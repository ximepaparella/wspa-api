const express = require('express');
const router = express.Router();
const MembershipService = require('../services/membership.service');
const service = new MembershipService();

router.get('/', (req, res) => {
  const memberships = service.find();
  res.json(memberships);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const membership = await service.findOne(id);
  res.json(membership);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newMembership = await service.create(body);
  res.status(201).json(newMembership);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const membership = await service.update(id, body);
  res.json({
    message: 'updated',
    membership
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const membership = await service.update(id, body);
  res.json({
    message: 'updated',
    membership
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
