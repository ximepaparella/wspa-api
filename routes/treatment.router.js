const express = require('express');
const TreatmentService = require('../services/treatment.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getTreatmentSchema,
  updateTreatmentSchema,
  createTreatmentSchema,
  queryTreatmentSchema
} = require('../schemas/treatment.schema');
const router = express.Router();
const service = new TreatmentService();

router.get('/',
validatorHandler(queryTreatmentSchema, 'query'),
async (req, res) => {
  const treatments = await service.find(req.query);
  res.json(treatments);
});

router.get(
  '/:id',
  validatorHandler(getTreatmentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const treatment = await service.findOne(id);
      res.json(treatment);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createTreatmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getTreatmentSchema, 'params'),
  validatorHandler(updateTreatmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const treatment = await service.update(id, body);
      res.json({
        message: 'updated',
        treatment,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  validatorHandler(getTreatmentSchema, 'params'),
  validatorHandler(updateTreatmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const treatment = await service.update(id, body);
      res.json({
        message: 'updated',
        treatment,
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
