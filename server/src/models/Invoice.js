// Claude
// Orders Collection
// {
//     _id: ObjectId(),
//     customer: ObjectId(), // Reference to Users collection (Customer)
//     products: [
//       {
//         product: ObjectId(), // Reference to Products collection
//         quantity: Number,
//         price: Number
//       }
//     ],
//     total: Number,
//     status: String, // Example: 'pending', 'shipped', 'delivered', 'cancelled'
//     createdAt: Date,
//     updatedAt: Date
//   }

// Invoices Collection
//   {
//     _id: ObjectId(),
//     order: ObjectId(), // Reference to Orders collection
//     customer: ObjectId(), // Reference to Users collection (Customer)
//     total: Number,
//     createdAt: Date,
//     updatedAt: Date
//   }

// Transactions Collection
//   {
//     _id: ObjectId(),
//     invoice: ObjectId(), // Reference to Invoices collection
//     amount: Number,
//     paymentMethod: String, // Example: 'credit_card', 'paypal', 'bank_transfer'
//     status: String, // Example: 'pending', 'successful', 'failed'
//     createdAt: Date,
//     updatedAt: Date
//   }

// This schema covers the main entities and relationships required for an e-commerce application. Here are some key points:

// Users have a role, which determines their permissions.
// Roles have associated permissions.
// Products belong to categories and are associated with a seller (user).
// Orders contain multiple products with quantities and prices.
// Invoices are generated for orders and reference the customer.
// Transactions are associated with invoices and store payment information.

// You can adjust this schema based on your specific requirements, such as adding additional fields, indexes, or embedding/referencing data as needed.
