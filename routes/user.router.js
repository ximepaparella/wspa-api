const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.json([{
      id: 1,
      name:'John Doe',
      password: '123456',
      email:'email@email.com',
      rol: 'admin'
  },
  {
    id: 2,
    name:'John Doe',
    password: '123456',
    email:'email@email.com',
    rol: 'admin'
}
]);
});


router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
      name:'John Doe',
      password: '123456',
      email:'email@email.com',
      rol: 'admin'
  }
  );
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message:'created',
    data: body
  })
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});


module.exports = router;
