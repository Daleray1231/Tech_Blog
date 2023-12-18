# Tech Blog Web App

This is a simple web application built using Express.js, Sequelize ORM, and Handlebars.js for templating. The application provides features for user authentication, blog creation, editing, and commenting.

## Setup

1. **Installation**

   To set up the project locally, follow these steps:

   - Clone the repository.
   - Run `npm install` to install the necessary dependencies.

2. **Database Configuration**

   - Ensure you have a MySQL database available.
   - Create a `.env` file and add your database credentials:

     ```
     DB_NAME=your_database_name
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     ```

3. **Running the App**

   - Execute `npm start` to launch the application.
   - Access the app via `http://localhost:3001` in your browser.

## File Structure

- **`controllers/`**: Contains routing logic for different parts of the application.
- **`models/`**: Defines Sequelize models for User, Blog, and Comment entities.
- **`utils/`**: Houses helper functions and authentication middleware.
- **`config/`**: Handles database connection and session store configuration.

## Dependencies Used

- **Express**: Web framework for handling HTTP requests.
- **Express-Handlebars**: Template engine for rendering views.
- **Sequelize**: ORM for interacting with the MySQL database.
- **Bcrypt**: Library for password hashing.
- **Express-Session**: Middleware for managing user sessions.
- **Connect-Session-Sequelize**: Store for session data in Sequelize.

## Key Features

- **User Authentication**: Registration, login, and session management.
- **Blogging**: Create, edit, and view blog posts.
- **Commenting**: Users can comment on blog posts.
- **Dashboard**: Personalized view for logged-in users to manage their blogs.

## Code Highlights

- `controllers/`: Defines routes for homepage, blog rendering, editing, user authentication, and dashboard display.
- `models/`: Defines Sequelize models for User, Blog, and Comment entities, with password hashing hooks and validations.

## Deployment

- The application is ready for deployment to platforms like Heroku or other hosting services.
- Ensure to set environment variables for database credentials and session secret in your deployment environment.

## Contributing

Contributions are welcome! Fork the repository, make changes, and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).