const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }, // e.g., 'view_products', 'create_order', 'manage_categories'
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", PermissionSchema);
