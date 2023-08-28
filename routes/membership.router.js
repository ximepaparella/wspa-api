const express = require('express');
const router = express.Router();
const MembershipService = require('../services/membership.service');
const service = new MembershipService();

router.get('/', async (req, res) => {
  const memberships = await service.find();
  res.json(memberships);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const membership = await service.findOne(id);
    res.json(membership);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newMembership = await service.create(body);
    res.status(201).json(newMembership);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const membership = await service.update(id, body);
    res.json({
      message: 'updated',
      membership,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const membership = await service.update(id, body);
    res.json({
      message: 'updated',
      membership,
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
