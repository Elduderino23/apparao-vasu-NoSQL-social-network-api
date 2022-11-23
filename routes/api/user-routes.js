const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addUser,
  removeUser,
} = require('');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addthoughts);

// /api/users/:userId/thoughts/:thoughtsId
router.route('/:userId/thoughts/:thoughtsId').delete(removethoughts);

module.exports = router;