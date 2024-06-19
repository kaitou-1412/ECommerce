const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { toJSON, paginate } = require("./plugins");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      private: true,
    },
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
      },
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: false,
    },
    contact: {
      phone: Number,
      address: String,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
UserSchema.plugin(toJSON);
UserSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
UserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
UserSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

module.exports = mongoose.model("User", UserSchema);
