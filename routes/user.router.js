const expresss = require('express');
const router = expresss.Router()

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


router.get('/:userId', (req, res) => {
  const {userId} = req.params;
  res.json({
    userId,
      name:'John Doe',
      password: '123456',
      email:'email@email.com',
      rol: 'admin'
  }
  );
});


module.exports = router;
