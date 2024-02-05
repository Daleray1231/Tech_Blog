# Tech Blog Web App

This is a versatile web application developed using Express.js, Sequelize ORM, and Handlebars.js for templating. The application encompasses robust features such as user authentication, blog creation, editing, and commenting.

![alt text](<images/Opera Snapshot_2024-02-05_143357_localhost.png>)

## Table of Contents
- [Setup](#setup)
  - [Installation](#installation)
  - [Database Configuration](#database-configuration)
  - [Running the App](#running-the-app)
- [File Structure](#file-structure)
- [Dependencies Used](#dependencies-used)
- [Key Features](#key-features)
- [Code Highlights](#code-highlights)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Setup

### Installation
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.

### Database Configuration
1. Ensure you have a MySQL database available.
2. Create a `.env` file and add your database credentials:

    ```makefile
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    ```

### Running the App
1. Execute `npm start` to launch the application.
2. Access the app via [http://localhost:3001](http://localhost:3001) in your browser.

## File Structure
- `controllers/`: Contains routing logic for different parts of the application.
- `models/`: Defines Sequelize models for User, Blog, and Comment entities.
- `utils/`: Houses helper functions and authentication middleware.
- `config/`: Handles database connection and session store configuration.

## Dependencies Used
- **Express:** Web framework for handling HTTP requests.
- **Express-Handlebars:** Template engine for rendering views.
- **Sequelize:** ORM for interacting with the MySQL database.
- **Bcrypt:** Library for password hashing.
- **Express-Session:** Middleware for managing user sessions.
- **Connect-Session-Sequelize:** Store for session data in Sequelize.

## Key Features
- **User Authentication:** Registration, login, and session management.
- **Blogging:** Create, edit, and view blog posts.
- **Commenting:** Users can comment on blog posts.
- **Dashboard:** Personalized view for logged-in users to manage their blogs.

## Code Highlights
- `controllers/`: Defines routes for homepage, blog rendering, editing, user authentication, and dashboard display.
- `models/`: Defines Sequelize models for User, Blog, and Comment entities, with password hashing hooks and validations.

## Deployment
[Heroku Deployed Application](https://blooming-taiga-54403-4daac811aa65.herokuapp.com/)

## Contributing
Contributions are welcome! Fork the repository, make changes, and create a pull request.
[GitHub Repo](https://github.com/Daleray1231/Tech_Blog)

## License
This project is licensed under the MIT License.
