const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const MembershipService = require('../services/membership.service');
const validatorHandler = require('../middlewares/validator.handler');
const uploadFile = require('../services/uploadImages.service'); // Adjust the path to where you saved uploadService.js

// Set up Multer with memory storage
const upload = multer({ storage: multer.memoryStorage() });

const {
  getMembershipSchema,
  updateMembershipSchema,
  createMembershipSchema,
} = require('../schemas/membership.schema');
const service = new MembershipService();

router.get('/', async (req, res) => {
  const memberships = await service.find();
  res.json(memberships);
});

router.get(
  '/:id',
  validatorHandler(getMembershipSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const membership = await service.findOne(id);
      res.json(membership);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createMembershipSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMembership = await service.create(body);
      res.status(201).json(newMembership);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getMembershipSchema, 'params'),
  validatorHandler(updateMembershipSchema, 'body'),
  async (req, res, next) => {
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
  },
);

router.put(
  '/:id',
  validatorHandler(getMembershipSchema, 'params'),
  validatorHandler(updateMembershipSchema, 'body'),
  async (req, res, next) => {
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
      'memberships',
    );

    // Return the URL of the uploaded image
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    next(error);
  }
});

router.delete('/upload/:key', async (req, res, next) => {
  try {
    const { key } = req.params; // Get the S3 object key from the request parameters

    const deleteParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    };

    await s3.deleteObject(deleteParams).promise();

    res.send({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).send({ error: 'Failed to delete image' });
  }
});

module.exports = router;
