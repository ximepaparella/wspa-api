// uploadService.js
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = 'wspa-images'; // Your S3 bucket name

/**
 * Uploads a file to a specified 'folder' in S3 based on entity type.
 *
 * @param {Buffer} fileBuffer - The buffer containing the file data.
 * @param {string} originalName - The original file name (used to extract the extension).
 * @param {string} entityType - The type of entity (e.g., 'spa-days', 'memberships', 'users').
 * @returns {Promise<string>} The URL of the uploaded file.
 */
const uploadFile = async (fileBuffer, originalName, entityType) => {
  const filename = uuidv4(); // Generate a unique filename
  const fileExtension = originalName.split('.').pop();
  const s3Key = `${entityType}/${filename}.${fileExtension}`;

  const params = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileBuffer,
    // ACL: 'public-read', // Uncomment if your S3 setup allows ACLs and you need the file to be publicly accessible
  };

  // Perform the upload to S3
  const uploadResult = await s3.upload(params).promise();
  return uploadResult.Location; // Return the URL of the uploaded file
};

module.exports = uploadFile;
