// routes/upload.router.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFile } = require('../services/s3.service'); // Import the file upload service

// Configure multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle file upload
router.post(
  '/upload/:folder',
  upload.single('file'), // Multer middleware to handle file upload
  async (req, res, next) => {
    try {
      const folder = req.params.folder;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Call the service to upload the file to S3 and get the URL
      const fileUrl = await uploadFile(file, folder);

      // Respond with the URL of the uploaded file
      res.json({ fileUrl });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
