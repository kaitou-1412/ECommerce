const logger = require("./logger");
const Role = require("../models/Role");
const Permission = require("../models/Permission");
const { permissionsData, rolesData } = require("./constants");

const checkAndCreatePermissions = async () => {
  const foundPermissions = await Permission.find({
    name: { $in: permissionsData.map((permission) => permission.name) },
  });
  const foundPermissionNames = foundPermissions.map(
    (permission) => permission.name
  );
  const missingPermissionsData = permissionsData.filter(
    (permission) => !foundPermissionNames.includes(permission.name)
  );
  if (missingPermissionsData.length > 0) {
    await Permission.insertMany(missingPermissionsData);
    logger.info("Permissions populated with initial data");
  } else {
    logger.info("Permissions already exists");
  }
};

const checkAndCreateRoles = async () => {
  const allPermissions = await Permission.find({});
  const permissionIdMap = {};
  allPermissions.forEach((permission) => {
    permissionIdMap[permission.name] = permission._id;
  });
  const rolesDataWithPermissionId = rolesData.map((role) => {
    return {
      name: role.name,
      permissionIds: role.permissions.map(
        (permission) => permissionIdMap[permission]
      ),
    };
  });
  const foundRoles = await Role.find({
    name: { $in: rolesDataWithPermissionId.map((role) => role.name) },
  });
  const foundRoleNames = foundRoles.map((role) => role.name);
  const missingRolesData = rolesDataWithPermissionId.filter(
    (role) => !foundRoleNames.includes(role.name)
  );
  if (missingRolesData.length > 0) {
    await Role.insertMany(missingRolesData);
    logger.info("Roles populated with initial data");
  } else {
    logger.info("Roles already exists");
  }
};

module.exports = {
  checkAndCreatePermissions,
  checkAndCreateRoles,
};
