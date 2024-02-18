const express = require('express');
const TreatmentService = require('../services/treatment.service');
const validatorHandler = require('../middlewares/validator.handler');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { config } = require('../config/config');


// Configure Cloudinary using values from your config
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const {
  getTreatmentSchema,
  updateTreatmentSchema,
  createTreatmentSchema,
  queryTreatmentSchema
} = require('../schemas/treatment.schema');
const router = express.Router();
const service = new TreatmentService();

// Define storage for uploaded files using Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

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
  upload.single('image'), // Handle image upload using Multer
  validatorHandler(createTreatmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const treatmentData = req.body;
      const imageFile = req.file; // Get the uploaded image file

      const newTreatment = await service.createTreatmentWithImage(
        treatmentData,
        imageFile
      );

      res.status(201).json(newTreatment);
    } catch (error) {
      next(error);
    }
  }
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


router.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      // Optional: Specify image transformation options if needed
      // e.g., width, height, crop, format, etc.
    });

    // Respond with the Cloudinary image URL
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
