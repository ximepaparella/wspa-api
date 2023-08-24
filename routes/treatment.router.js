const expresss = require('express');

const router = expresss.Router()

router.get('/', (req, res) => {
  res.json([{
      id:1,
      name:'SHOCK DE HIDRATACIÓN',
      aditionals: '+ Infusión + Pastelería del día',
      duration: 50,
      description:'Nuestro completo tratamiento de hidratación facial ayuda a devolver los niveles óptimos de agua a las capas más profundas de la piel. Gracias a la profundidad del tratamiento, la piel se verá más luminosa y se sentirá más fresca, y confortable. Los niveles de flexibilidad de la piel aumentarán notablemente y su capacidad de protección ante agentes hostiles incrementará logrando una piel más fuerte y resistente.',
      price: 13000,
      salePrice: 10000,
      giftLinkId: 148,
      category: 'Tratamientos Faciales'
  },
  {
    id:2,
    name:'SHOCK DE HIDRATACIÓN',
    aditionals: '+ Infusión + Pastelería del día',
    duration: 50,
    description:'Nuestro completo tratamiento de hidratación facial ayuda a devolver los niveles óptimos de agua a las capas más profundas de la piel. Gracias a la profundidad del tratamiento, la piel se verá más luminosa y se sentirá más fresca, y confortable. Los niveles de flexibilidad de la piel aumentarán notablemente y su capacidad de protección ante agentes hostiles incrementará logrando una piel más fuerte y resistente.',
    price: 13000,
    salePrice: 10000,
    giftLinkId: 148,
    category: 'Tratamientos Faciales'
}]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name:'SHOCK DE HIDRATACIÓN',
    aditionals: '+ Infusión + Pastelería del día',
    duration: 50,
    description:'Nuestro completo tratamiento de hidratación facial ayuda a devolver los niveles óptimos de agua a las capas más profundas de la piel. Gracias a la profundidad del tratamiento, la piel se verá más luminosa y se sentirá más fresca, y confortable. Los niveles de flexibilidad de la piel aumentarán notablemente y su capacidad de protección ante agentes hostiles incrementará logrando una piel más fuerte y resistente.',
    price: 13000,
    salePrice: 10000,
    giftLinkId: 148,
    category: 'Tratamientos Faciales'
  })
});





module.exports = router;
