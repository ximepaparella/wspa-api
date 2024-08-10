const express = require('express');
const router = express.Router();
const SpaDayService = require('../services/spaDay.service');
const validatorHandler = require('../middlewares/validator.handler');

const {
  getSpaDaySchema,
  updateSpaDaySchema,
  createSpaDaySchema,
} = require('../schemas/spaDay.schema');
const service = new SpaDayService();

router.get('/', async (req, res) => {
  const spaDays = await service.find();
  res.json(spaDays);
});

router.get(
  '/:id',
  validatorHandler(getSpaDaySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const spaDay = await service.findOne(id);
      res.json(spaDay);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSpaDay = await service.create(body);
      res.status(201).json(newSpaDay);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getSpaDaySchema, 'params'),
  validatorHandler(updateSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const spaDay = await service.update(id, body);
      res.json({
        message: 'updated',
        spaDay,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  validatorHandler(getSpaDaySchema, 'params'),
  validatorHandler(updateSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const spaDay = await service.update(id, body);
      res.json({
        message: 'updated',
        spaDay,
      });
    } catch (error) {
      next(error);
    }
  },
);

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
