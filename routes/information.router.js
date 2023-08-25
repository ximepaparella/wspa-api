const expresss = require('express');
const router = expresss.Router();
const InformationService = require('../services/information.service');
const service = new InformationService();

router.get('/', (req, res) => {
  const information = service.find();
  res.json(information);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const information = service.findOne(id);
  res.json(information);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
