const router = require('express').Router();
const thoughtRoutes = require('./api/thought-routes');
const userRoutes = require('./api/user-routes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;