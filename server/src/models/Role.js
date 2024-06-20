const mongoose = require("mongoose");
const { roles } = require("../config/constants");

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(roles),
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
