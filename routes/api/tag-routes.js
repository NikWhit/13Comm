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
    const tagsData = tags.map( (tag) => tag.get({plain:true}));
    res.status(200).json(tagsData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
  const tags = await Tag.findByPk(req.params.id, {
    include: [{ model: Product}],
  });
  const tagsData = tags.get({plain:true});
res.status(200).json(tagsData);
  } catch(err) {
res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});
  // create a new tag
router.post('/', async (req, res) => {
  try {
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch(err) {
    res.status(500).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
  const tags = Tag.update(req.body,{
    where: {id: req.params.id}});
res.status(200).json(Tag);
  } catch(err) {
res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete tag by its `id` value
  try {
  const tags = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
if (!tags) {
res.status(400).json({ message: 'No tag with that id'});
return;
}
res.status(200).json(tags);
  } catch(err) {
res.status(500).json(err);
  }
});

module.exports = router;