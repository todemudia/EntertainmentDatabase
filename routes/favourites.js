import { Router } from 'express';
import auth from '../middleware/auth';
import Favourite from '../models/Favourite';

const router = Router();

/**
 * @route   GET Favourite
 * @desc    Get All Favourite
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const favourites = await Favourite.find();
    if (!favourites) throw Error('No Movies or TV Shows in Favourites');

    res.status(200).json(favourites);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST Favourite
 * @desc    Create An Favourite
 * @access  Private
 */

router.post('/', auth, async (req, res) => {
  const newFavourite = new Favourite({
    name: req.body.name
  });

  try {
    const favourite = await newFavourite.save();
    if (!favourite) throw Error('Something went wrong with saving favourites');

    res.status(200).json(favourite);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE Favourite/:id
 * @desc    Delete A Favourite
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
  try {
    const favourite = await Favourite.findById(req.params.id);
    if (!favourite) throw Error('No Favourites found');

    const removed = await favourite.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the Favorute');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

export default router;