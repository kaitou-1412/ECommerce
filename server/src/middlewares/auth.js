const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");
const Role = require("../models/Role");
const Permission = require("../models/Permission");

const auth =
  (...requiredPermissions) =>
  async (req, res, next) => {
    const user = await User.findById(req.body.userId);
    const role = await Role.findById(user.roleId);
    const permissions = await Permission.find({
      _id: { $in: role.permissionIds },
    });
    if (
      requiredPermissions.filter(
        (requiredPermission) =>
          !permissions
            .map((permission) => permission.name)
            .includes(requiredPermission)
      ).length > 0
    ) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized"));
    }
    return next();
  };

module.exports = auth;
