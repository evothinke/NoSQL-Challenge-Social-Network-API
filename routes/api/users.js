const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');


//localhost:3000/api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

//localhost:3000/api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
