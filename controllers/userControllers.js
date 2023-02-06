const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [users, _] = await User.findAll();

    res.status(200).json({ count: users.length, users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    // let { userName } = req.body;
    let user = new User(req.body);
    let [checkUser, _] = await User.findById(user.userName);
    if (checkUser.length === 0) {
      user = await user.save();
      res.status(201).json({ message: "User created" });
    } else {
      res.status(409).json({ message: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let [user, _] = await User.findById(userId);
    res.status(200).json({ user: user[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteUsersById = async (req, res, next) => {
  try {
    let usersToDelete = req.body;
    let usersCommaSeparated = "'" + usersToDelete?.userIds.join("','") + "'";
    usersToDelete = await User.delete(usersCommaSeparated);
    res.status(200).json({ message: "User/s deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateUserById = async (req,res,next) => {
    try {
        let user = new User(req.body);
        let [checkUser, _] = await User.findById(user.userName);
        if (checkUser.length !== 0) {
            user = await user.update();
            res.status(200).json({ message: "User updated" });
          } else {
            res.status(409).json({ message: "User does not exists" });
          }
    } catch (error) {
        
    }
}