const express = require('express');
const router = express.Router();
const multer = require('multer');
const SpaDayService = require('../services/spaDay.service');
const validatorHandler = require('../middlewares/validator.handler');
const uploadFile = require('../services/uploadImages.service'); // Adjust the path to where you saved uploadService.js

// Set up Multer with memory storage
const upload = multer({ storage: multer.memoryStorage() });

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

// Updated /upload route using the uploadFile utility
router.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Use the utility function to upload the file and specify 'spa-days' as the entity type
    const imageUrl = await uploadFile(
      req.file.buffer,
      req.file.originalname,
      'spa-days',
    );

    // Return the URL of the uploaded image
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    next(error);
  }
});

module.exports = router;
