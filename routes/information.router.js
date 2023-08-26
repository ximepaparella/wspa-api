const expresss = require('express');
const router = expresss.Router();
const InformationService = require('../services/information.service');
const service = new InformationService();

router.get('/', (req, res) => {
  const information = service.find();
  res.json(information);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const information = await service.findOne(id);
  res.json(information);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newInformation = await service.create(body);
  res.status(201).json(newInformation);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const information = await service.update(id, body);
  res.json({
    message: 'updated',
    information
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const information = await service.update(id, body);
  res.json({
    message: 'updated',
    information
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    rta
  });
});

module.exports = router;
