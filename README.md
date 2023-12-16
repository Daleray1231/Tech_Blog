# Tech Blog

## Overview
This Tech Blog project is a platform where users can create accounts, log in, write blog posts, and engage by commenting on posts.

### Features
- **User Authentication:**
  - Register with an email and password.
  - Log in and out securely.
- **Blog Post Creation:**
  - Create new blog posts.
  - Edit and delete your own posts.
- **Comments:**
  - Comment on blog posts.
  - Engage in discussions by commenting on posts.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository_URL>
Install dependencies:

bash
Copy code
npm install
Set up your environment variables:

Create a .env file based on .env.example.
Set up your database credentials and session secret.
Run the application:

bash
Copy code
npm start
Usage
User Management
Creating a User:

Access the registration page and provide an email and password to create a new user account.
Logging In:

Use your registered email and password to log in securely.
Logging Out:

Log out from your account to end the session securely.
Blog Post Management
Creating a Blog Post:

After logging in, access the dashboard to create new blog posts.
Editing/Deleting Posts:

Users can edit or delete their own posts from the dashboard.
Commenting on Posts
Engaging with Comments:
Users can comment on blog posts to participate in discussions.
Technologies Used
Node.js and Express.js for server-side development.
Sequelize as the ORM for interacting with the database.
Express-Session for managing user sessions.
bcrypt for password hashing.
HTML, CSS, and JavaScript for frontend and user interface.
Handlebars (or another templating engine) for rendering views.
Contributing
Contributions to improve this project are welcome! Fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License.