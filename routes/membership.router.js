const express = require('express');
const router = express.Router();
const MembershipService = require('../services/membership.service');
const service = new MembershipService();

router.get('/', (req, res) => {
  const memberships = service.find();
  res.json(memberships);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const membership = service.findOne(id);
  res.json(membership);
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
