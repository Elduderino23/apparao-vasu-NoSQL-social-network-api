const router = require('express').Router();
const {
getUser,
getSingleUser,
createUser,
deleteUser,
updateUser,
addFriend,
removeFriend
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/thoughts
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)
module.exports = router;