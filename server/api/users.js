const router = require('express').Router();
const { User } = require('../db/models');
const { isAdmin } = require('../serverUtils');
module.exports = router;

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get('/:userId', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const [newUser, created] = await User.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
     })

     if (created) {
       res.send(newUser)
     } else {
       res.send('This email address is already used.')
     }
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.delete('/:userId', isAdmin, async (req, res, next) => {
  const userId = +req.params.userId;
  try {
    await User.destroy({
      where: {
        id: userId,
      },
    });
    res.json(userId);
  } catch (error) {
    next(error);
  }
});
