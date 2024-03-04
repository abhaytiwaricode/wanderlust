# Wanderlust Web Application

Wanderlust is a web application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to explore and book vacation rentals.

## Installation

- Clone the repository:
  ```sh
  git clone https://github.com/your-username/your-repository.git
  ```
- Navigate to the project directory:

  ```sh
  cd your-repository

  ```

- Install dependencies using npm:

  ```sh
  npm install

  ```

- Set up the MongoDB connection by updating the MONGO_URL variable in app.js with your MongoDB connection string.

- Start the development server:

  ```sh
  npm start

  ```

- **Access the application at [http://localhost:8080/](http://localhost:8080/).**

## Technologies Used

**Frontend:** HTML, CSS, JavaScript, EJS templates, Bootstrap

**Backend:** Node.js, Express.js, MongoDB

**Dependencies:** mongoose, path, method-override, ejs-mate, express-session, connect-flash, Joi, passport, passport-local, passport-local-mongoose.

## Features

- View all listings
- View listing details
- Add new listings
- Edit existing listings
- Delete listings
- Add reviews to listings
- Flash messages for success and error notifications
- Register
- Login

## File Structure

- **app.js:** Main application file containing server setup and routes
- **utils/ExpressError.js:** Utility class for custom error handling
- **routes/listing.js:** Route file for handling listing-related routes
- **routes/review.js:** Route file for handling review-related routes
- **routes/user.js:** Route file for handling user-related routes
- **models/user.js:** User model for MongoDB
- **views/:** Directory containing EJS templates for rendering views
- **public/:** Directory containing static assets like CSS and client-side JavaScript
- **schema.js:** File containing Joi schemas for validating listing and review data

## Routes

### Listing Route (routes/listing.js)

- **User Routes:**/register, /login
- **Index Route:** GET /listings/
- **New Route:** GET /listings/new
- **Show Route:** GET /listings/:id
- **Create Route:** POST /listings/
- **Edit Route:** GET /listings/:id/edit
- **Update Route:** PUT /listings/:id
- **Delete Route:** DELETE /listings/:id

### Review Route (routes/review.js)

- **Create Review Route:** POST /listings/:id/reviews/
- **Delete Review Route:** DELETE /listings/:id/reviews/:reviewId

### Signup Route (`/signup`)

- Renders a signup form (`signup.ejs`) for users to register.
- Processes the form submission, creates a new user in the database using `User.register` method from `passport-local-mongoose`, and redirects to the listings page (`/listings`) upon successful registration.
- If there's an error during registration, it flashes an error message and redirects back to the signup page.

### Login Route (`/login`)

- Renders a login form (`login.ejs`) for users to log in.
- Processes the form submission, authenticates the user using `passport.authenticate` middleware with a local strategy, and redirects to the listings page upon successful login.
- If authentication fails, it flashes an error message and redirects back to the login page.

## Middlewares

- **validateListing:** Middleware to validate listing data using Joi schema
- **validateReview:** Middleware to validate review data using Joi schema
- **wrapAsync:** Utility function to handle asynchronous functions in routes
- **session:** Middleware for session management
- **flash:** Middleware for flash messages
- **passport:** Middleware for user authentication

## Error Handling

- Custom `ExpressError` class is used for error handling
- Flash messages are used for notifying users about success and error messages
- 404 error code for page not found
- 500 error code for other server errors

## Dependencies

- **mongoose:** MongoDB object modeling tool
- **wrapAsync:** Utility function to handle asynchronous functions in routes
- **ExpressError:** Custom error handling utility
- **Joi:** Schema validation library for validating listing and review data

## Contributing

If you'd like to contribute to Wanderlust, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a new Pull Request
