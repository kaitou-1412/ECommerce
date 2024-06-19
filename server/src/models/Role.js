const mongoose = require("mongoose");
const { Role } = require("../config/constants");

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(Role),
      default: Role.CUSTOMER,
    },
    permissionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", RoleSchema);
