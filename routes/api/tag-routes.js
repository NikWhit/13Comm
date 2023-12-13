const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{model: Product}],
    });
    const tagData = tag.map( (tag) => tag.get({plain:true}));
    res.status(200).json(tagDataData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
  const Tag = await tag.findByPk(req.params.id, {
    include: [{ model: Product}],
  });
  const tagData = tags.get({plain:true});
res.status(200).json(tagData);
  } catch(err) {
res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});
  // create a new tag
router.post('/', async (req, res) => {
  try {
    const Tag = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
  const Tag = Tag.update(req.body,{
    where: {id: req.params.id}});
res.status(200).json(Tag);
  } catch(err) {
res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
  const Tag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
res.status(200).json(Tag);
  } catch(err) {
res.status(500).json(err);
  }
});

module.exports = router;