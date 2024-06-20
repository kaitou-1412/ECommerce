const mongoose = require("mongoose");
const { permissions } = require("../config/constants");

const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(permissions),
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", PermissionSchema);
