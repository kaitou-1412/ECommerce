const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const authService = require("../services/auth.service");

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).json(user);
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  res.status(httpStatus.OK).json(user);
});

// const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if(!user)
//     {
//       res.status(400).json("Wrong credentials!");
//     }

//     const validated = await bcrypt.compare(req.body.password, user.password);
//     if(!validated)
//     {
//       res.status(400).json("Wrong credentials!");
//     }
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

module.exports = {
  register,
  login,
};
