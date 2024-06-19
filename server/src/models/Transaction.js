// Refer: https://faun.pub/best-practices-for-organizing-your-express-js-project-a-guide-to-folder-structure-f990db979ee7
// Best Practices for Organizing Your Express.js Project: A Guide to Folder Structure
// Express.js is a powerful and flexible Node.js web application framework widely used to build robust and scalable web applications. As your project grows in complexity, maintaining a clean and well-organized folder structure becomes crucial for code readability, maintainability, and collaboration among team members. In this blog post, we’ll explore some best practices for organizing your Express.js project’s folder structure.

// 1. Separation of Concerns: MVC Architecture
// Adhering to the Model-View-Controller (MVC) architectural pattern helps maintain a clear separation of concerns within your application. Consider organizing your project into the following directories:

// models: Contains data models and database schemas.
// views: Holds templates and UI-related files.
// controllers: Manages the application’s logic and connects models with views.
// This separation makes it easier to locate and update specific components of your application.

// project-root/
// |-- controllers/
// |-- models/
// |-- views/
// 2. Routes: Modular and Expressive
// Express.js makes use of routes to define how the application responds to client requests. To keep your routes organized, create a dedicated directory for them. Group related routes into separate files, such as user routes, product routes, etc.

// project-root/
// |-- routes/
// |   |-- userRoutes.js
// |   |-- productRoutes.js
// |   |-- index.js
// In the main index.js file, you can aggregate and export the various route modules.

// 3. Middleware: Centralized and Configurable
// Middleware functions are essential for processing requests in Express.js. Keep your middleware functions in a separate directory to maintain a clean and modular structure.

// project-root/
// |-- middleware/
// |   |-- authentication.js
// |   |-- logging.js
// This allows you to easily configure and manage middleware for different routes and components.

// 4. Configuration: Centralized Settings
// Place configuration files, such as environment variables or database configurations, in a dedicated config directory.

// project-root/
// |-- config/
// |   |-- database.js
// |   |-- environment.js
// This makes it simple to update settings and manage configurations across different environments.

// 5. Public Assets: Static Files
// Static files, like stylesheets, images, or client-side scripts, should be stored in a public directory.

// project-root/
// |-- public/
// |   |-- styles/
// |   |-- images/
// |   |-- scripts/
// 6. Utilities: Helper Functions and Modules
// Create a utils or helpers directory to store utility functions and modules that are shared across different parts of your application.

// project-root/
// |-- utils/
// |   |-- validation.js
// |   |-- helpers.js
// This keeps your codebase DRY (Don’t Repeat Yourself) and promotes code reusability.

// 7. Tests: Separate and Organized
// When writing tests for your Express.js application, organize them in separate tests or spec directory.

// project-root/
// |-- tests/
// |   |-- unit/
// |   |   |-- user.test.js
// |   |-- integration/
// |   |   |-- authentication.test.js
// Structured testing directories make it easier to locate and run specific types of tests.

// 8. Logging: Centralized and Configurable
// Keep your logging configuration in a dedicated directory to manage and customize logging settings.

// project-root/
// |-- logs/
// |   |-- application.log
// |   |-- error.log
// Here is what the final structure looks like:

// project-root/
// |-- controllers/
// |-- models/
// |-- routes/
// |   |-- userRoutes.js
// |   |-- productRoutes.js
// |   |-- index.js
// |-- middleware/
// |   |-- authentication.js
// |   |-- logging.js
// |-- config/
// |   |-- database.js
// |   |-- environment.js
// |-- public/
// |   |-- styles/
// |   |-- images/
// |   |-- scripts/
// |-- utils/
// |   |-- validation.js
// |   |-- helpers.js
// |-- tests/
// |   |-- unit/
// |   |   |-- user.test.js
// |   |-- integration/
// |   |   |-- authentication.test.js
// |-- logs/
// |   |-- application.log
// |   |-- error.log
// Conclusion
// A well-organized folder structure is fundamental for the maintainability and scalability of your Express.js projects. By following these best practices, you can create a clear separation of concerns, improve code readability, and streamline collaboration within your development team. Remember that the specifics of your project may influence the exact structure you choose, so feel free to adapt these recommendations to fit your application’s needs.
