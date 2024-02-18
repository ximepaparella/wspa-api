const multer = require('multer');

// Define Multer storage and upload configuration
const storage = multer.memoryStorage(); // You can choose another storage method if needed
const upload = multer({
  storage: storage,
  limits: {
    // Limit the file size (adjust as needed)
    fileSize: 1024 * 1024 * 5, // 5 MB (in bytes)
  },
  fileFilter: (req, file, cb) => {
    // Validate file types (e.g., allow only images)
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/gif' ||
      file.mimetype === 'image/webp'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WEBP, and GIF files are allowed.'));
    }
  },
});

module.exports = upload;
