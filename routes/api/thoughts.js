const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');


//localhost:3000/api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

  //// localhost:3001/api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
//// localhost:3001/api/thoughts/:ThoughtID/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

  //// localhost:3001/api/thoughts/:thoughtId/reactions/:reactionID
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
