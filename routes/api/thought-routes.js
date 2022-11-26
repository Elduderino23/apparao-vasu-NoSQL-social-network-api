const router = require('express').Router();
const {
getThought,
getSingleThought,
createThought,
deleteThought,
updateThought,
addReaction,
removeReaction
} = require('../../controllers/thought-controllers');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:userId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/users/:userId/thoughts
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)
router.route('/:thoughtId/reactions/').post(addReaction)

module.exports = router;