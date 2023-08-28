const expresss = require('express');
const router = expresss.Router();
const InformationService = require('../services/information.service');
const service = new InformationService();

router.get('/', async (req, res) => {
  const information = await service.find();
  res.json(information);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const information = await service.findOne(id);
    res.json(information);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newInformation = await service.create(body);
    res.status(201).json(newInformation);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const information = await service.update(id, body);
    res.json({
      message: 'updated',
      information,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const information = await service.update(id, body);
    res.json({
      message: 'updated',
      information,
    });
  } catch (error) {
    next(error);
  }
});

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

module.exports = router;
