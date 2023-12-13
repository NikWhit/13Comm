const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const Category = await Category.findAll({
    include: [{model: Product}],
    });
    const categoryData = category.map( (categories) => categories.get({plain:true}));
    res.status(200).json(categoryData);
} catch(err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const Category = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
    });
    const categoryData = category.map( (categories) => categories.get({plain:true}));
    res.status(200).json(categoryData);
} catch(err) {
  res.status(500).json(err);
}
});


router.post('/', (req, res) => {
  // create a new category
  const categoryData = Category.create({
    category_name: req.body.category_name,

  });
  res.status(200).json(categoryData);
  res.status(500).json(err);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const categoryData = Category.update(req.body,{
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(categoryData);
  res.status(500).json(err);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const categoryData = Category.destroy(req.body,{
    where: {
      id: req.params.id,
    },
  })
  res.status(404).json({message: 'Nothing here'});
  res.status(200).json(categoryData);
  res.status(500).json(err);
});

module.exports = router;