import { Router } from 'express';
import User from '../models/User';

const router = Router();

// @route   GET api/users
// @desc    Register new user
// @access  Pubic
router.get('/', (req, res) => {
    res.send('Favourites Registered')
})

module.exports = router;