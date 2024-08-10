const express = require('express');
const router = express.Router();
const SpaDayService = require('../services/spaDay.service');
const validatorHandler = require('../middlewares/validator.handler');
const multer = require('multer');

const {
  getSpaDaySchema,
  updateSpaDaySchema,
  createSpaDaySchema,
} = require('../schemas/spaDay.schema');

const service = new SpaDayService();

// Configure multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

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
  }
);

router.post(
  '/',
  upload.single('featuredImage'), // Multer middleware to handle file upload
  validatorHandler(createSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const file = req.file; // Get the uploaded file
      const newSpaDay = await service.create(body, file);
      res.status(201).json(newSpaDay);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  upload.single('featuredImage'), // Multer middleware to handle file upload
  validatorHandler(getSpaDaySchema, 'params'),
  validatorHandler(updateSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const file = req.file; // Get the uploaded file
      const spaDay = await service.update(id, body, file);
      res.json({
        message: 'updated',
        spaDay,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  upload.single('featuredImage'), // Multer middleware to handle file upload
  validatorHandler(getSpaDaySchema, 'params'),
  validatorHandler(updateSpaDaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const file = req.file; // Get the uploaded file
      const spaDay = await service.update(id, body, file);
      res.json({
        message: 'updated',
        spaDay,
      });
    } catch (error) {
      next(error);
    }
  }
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
