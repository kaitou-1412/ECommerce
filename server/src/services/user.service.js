const bcrypt = require("bcrypt");
const httpStatus = require("http-status");
const User = require("../models/User");
const Role = require("../models/Role");
const ApiError = require("../utils/ApiError");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const salt = await bcrypt.genSalt(10);
  userBody.password = await bcrypt.hash(userBody.password, salt);
  const role = await Role.findOne({ name: userBody.role });
  userBody.roleId = role._id;
  return User.create(userBody);
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};
