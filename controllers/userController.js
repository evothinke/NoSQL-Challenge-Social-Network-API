const User = require('../models/User');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);

    }
  },




  async getUserById({ params }, res) {
    await User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  },

  async updateUser({ params, body }, res) {
    await User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.status(400).json(err));
  },


  async deleteUser({ params }, res) {
  await User.findOneAndDelete({ _id: params.id })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(userData);
    })
    .catch(err => res.status(400).json(err));}

  }
//   addFriend({ params }, res) {
//     User.findOneAndUpdate(
//       { _id: params.userId },
//       { $push: { friends: params.friendId } },
//       { new: true }
//     )
//       .populate({
//         path: 'friends',
//         select: '-__v'
//       })
//       .select('-__v')
//       .then(userData => {
//         if (!userData) {
//           res.status(404).json({ message: 'No user found with this id!' });
//           return;
//         }
//         res.json(userData);
//       })
//       .catch(err => res.status(400).json(err));
//   },

//   removeFriend({ params }, res) {
//     User.findOneAndUpdate(
//       { _id: params.userId },
//       { $pull: { friends: params.friendId } },
//       { new: true }
//     )
//       .populate({
//         path: 'friends',
//         select: '-__v'
//       })
//       .select('-__v')
//       .then(userData => {
//         if (!userData) {
//           res.status(404).json({ message: 'No user found with this id!' });
//           return;
//         }
//         res.json(userData);
//       })
//       .catch(err => res.status(400).json(err));
//   }
// };

// module.exports = userController;
