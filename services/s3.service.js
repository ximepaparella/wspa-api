const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { config } = require('../config/config');

// Configure S3 client
const s3Client = new S3Client({
  region: config.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
  }
});

async function uploadFile(file, folder) {
  const bucketName = config.AWS_S3_BUCKET_NAME;

  const uploadParams = {
    Bucket: bucketName,
    Key: `${folder}/${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    return `https://${bucketName}.s3.${config.AWS_DEFAULT_REGION}.amazonaws.com/${folder}/${file.originalname}`;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
}

module.exports = {
  uploadFile
};
