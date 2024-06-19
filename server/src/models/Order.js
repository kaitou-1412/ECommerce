// ChatGPT
// Orders Collection:

// order_id (Primary Key)
// user_id (Foreign Key referencing Users Collection)
// order_date
// status (e.g., pending, processing, shipped, delivered)
// order_details (array of objects containing product_id, quantity, price, etc.)
// Invoice Collection:

// invoice_id (Primary Key)
// order_id (Foreign Key referencing Orders Collection)
// total_amount
// invoice_date
// payment_status (e.g., pending, paid, refunded)
// Transactions Collection:

// transaction_id (Primary Key)
// invoice_id (Foreign Key referencing Invoice Collection)
// transaction_date
// amount
// payment_method
// transaction_status (e.g., success, failed)
// For handling images, you can store them directly in the filesystem and save their paths in the respective document in the database.

// This is a basic schema outline. Depending on the complexity and specific requirements of your application, you might need to extend or modify it. Additionally, for performance reasons, you might want to denormalize or aggregate some data.
