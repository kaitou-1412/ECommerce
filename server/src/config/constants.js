const roles = {
  CUSTOMER: "customer",
  SELLER: "seller",
  ADMIN: "admin",
};

const permissions = {
  VIEW_PRODUCTS: "view_products",
  ADD_TO_CART: "add_to_cart",
  CHECKOUT: "checkout",
  ORDER_HISTORY: "order_history",
  WRITE_REVIEWS: "write_reviews",
  PROFILE_MANAGEMENT: "profile_management",
  WISHLIST: "wishlist",
  TRACK_ORDERS: "track_orders",

  PRODUCT_MANAGEMENT: "product_management",
  INVENTORY_MANAGEMENT: "inventory_management",
  ORDER_MANAGEMENT: "order_management",
  VIEW_SALES_REPORTS: "view_sales_reports",
  MANAGE_PROMOTIONS: "manage_promotions",
  CUSTOMER_INTERACTION: "customer_interaction",

  USER_MANAGEMENT: "user_management",
  SITE_MANAGEMENT: "site_management",
  MANAGE_CATEGORIES: "manage_categories",
  MANAGE_REVIEWS: "manage_reviews",
  CUSTOMER_SUPPORT: "customer_support",
  ACCESS_LOGS_REPORTS: "access_logs_reports",
  MANAGE_PAYMENTS: "manage_payments",
  CONTENT_MANAGEMENT: "content_management",
};

const permissionsData = [
  {
    name: permissions.VIEW_PRODUCTS,
    description: "Permission to view products",
  },
  {
    name: permissions.ADD_TO_CART,
    description: "Permission to add products to the cart",
  },
  {
    name: permissions.CHECKOUT,
    description: "Permission to checkout and purchase items",
  },
  {
    name: permissions.ORDER_HISTORY,
    description: "Permission to view order history",
  },
  {
    name: permissions.WRITE_REVIEWS,
    description: "Permission to write reviews for products",
  },
  {
    name: permissions.PROFILE_MANAGEMENT,
    description: "Permission to manage user profile information",
  },
  {
    name: permissions.WISHLIST,
    description: "Permission to add products to the wishlist",
  },
  {
    name: permissions.TRACK_ORDERS,
    description: "Permission to track order status",
  },

  {
    name: permissions.PRODUCT_MANAGEMENT,
    description: "Permission to manage products",
  },
  {
    name: permissions.INVENTORY_MANAGEMENT,
    description: "Permission to manage inventory levels",
  },
  {
    name: permissions.ORDER_MANAGEMENT,
    description: "Permission to manage orders",
  },
  {
    name: permissions.VIEW_SALES_REPORTS,
    description: "Permission to view sales reports",
  },
  {
    name: permissions.MANAGE_PROMOTIONS,
    description: "Permission to manage promotional offers",
  },
  {
    name: permissions.CUSTOMER_INTERACTION,
    description: "Permission to interact with customers",
  },

  {
    name: permissions.USER_MANAGEMENT,
    description: "Permission to manage all users",
  },
  {
    name: permissions.SITE_MANAGEMENT,
    description: "Permission to manage site-wide settings",
  },
  {
    name: permissions.MANAGE_CATEGORIES,
    description: "Permission to manage product categories",
  },
  {
    name: permissions.MANAGE_REVIEWS,
    description: "Permission to manage product reviews",
  },
  {
    name: permissions.CUSTOMER_SUPPORT,
    description: "Permission to handle customer support issues",
  },
  {
    name: permissions.ACCESS_LOGS_REPORTS,
    description: "Permission to access logs and reports",
  },
  {
    name: permissions.MANAGE_PAYMENTS,
    description: "Permission to manage payments and refunds",
  },
  {
    name: permissions.CONTENT_MANAGEMENT,
    description: "Permission to manage site content",
  },
];

const rolesData = [
  {
    name: roles.CUSTOMER,
    permissions: [
      permissions.VIEW_PRODUCTS,
      permissions.ADD_TO_CART,
      permissions.CHECKOUT,
      permissions.ORDER_HISTORY,
      permissions.WRITE_REVIEWS,
      permissions.PROFILE_MANAGEMENT,
      permissions.WISHLIST,
      permissions.TRACK_ORDERS,
    ],
  },
  {
    name: roles.SELLER,
    permissions: [
      permissions.VIEW_PRODUCTS,
      permissions.PRODUCT_MANAGEMENT,
      permissions.INVENTORY_MANAGEMENT,
      permissions.ORDER_MANAGEMENT,
      permissions.VIEW_SALES_REPORTS,
      permissions.MANAGE_PROMOTIONS,
      permissions.CUSTOMER_INTERACTION,
      permissions.PROFILE_MANAGEMENT,
      permissions.MANAGE_REVIEWS,
    ],
  },
  {
    name: roles.ADMIN,
    permissions: [
      permissions.VIEW_PRODUCTS,
      permissions.PRODUCT_MANAGEMENT,
      permissions.INVENTORY_MANAGEMENT,
      permissions.ORDER_MANAGEMENT,
      permissions.VIEW_SALES_REPORTS,
      permissions.MANAGE_PROMOTIONS,
      permissions.CUSTOMER_INTERACTION,
      permissions.PROFILE_MANAGEMENT,
      permissions.MANAGE_REVIEWS,
      permissions.USER_MANAGEMENT,
      permissions.SITE_MANAGEMENT,
      permissions.MANAGE_CATEGORIES,
      permissions.CUSTOMER_SUPPORT,
      permissions.ACCESS_LOGS_REPORTS,
      permissions.MANAGE_PAYMENTS,
      permissions.CONTENT_MANAGEMENT,
    ],
  },
];

module.exports = { roles, permissions, rolesData, permissionsData };
