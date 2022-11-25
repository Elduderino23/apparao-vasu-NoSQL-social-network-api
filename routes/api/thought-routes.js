const router = require('express').Router();
const {
getThought,
getSingleThought,
createThought,
deleteThought,
updateThought,
addThought,
removeThought
} = require('../../controllers/thought-controllers');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/users/:userId/thoughts
router.route('/:thoughtId/reactions/:reactionId').delete(removeThought)
router.route('/:thoughtId/reactions/').post(addThought)

module.exports = router;