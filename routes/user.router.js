const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const uploadFile = require('../services/uploadImages.service'); // Adjust the path to where you saved uploadService.js

// Set up Multer with memory storage
const upload = multer({ storage: multer.memoryStorage() });

const {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
} = require('../schemas/user.schema');
const service = new UserService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json({
        message: 'updated',
        user,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json({
        message: 'updated',
        user,
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
      'users',
    );

    // Return the URL of the uploaded image
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    next(error);
  }
});

module.exports = router;
