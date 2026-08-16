# WTWR (What to Wear?): Back End

## About the Project

This project is focused on creating the back-end server for the WTWR application. The server stores information for users and their clothing items so the front end can work with that information.

While working on this project, I am learning more about servers, databases, security, testing, and how the different parts of an application communicate with each other. Users can now create an account, sign in, update their profile, and safely manage their clothing items.

## Functionality

The server can currently:

- Create a user account with an email and password
- Protect passwords before saving them
- Sign users in and give them a token
- Display and update the current user's profile
- Display clothing items without requiring a user to sign in
- Let signed-in users create clothing items
- Add and remove likes from clothing items
- Allow users to delete only the clothing items they created
- Check that the information being entered is valid
- Return helpful responses when something goes wrong

## Technologies and Techniques Used

- **Node.js** to run the back-end code
- **Express.js** to create the server and routes
- **MongoDB** to store the application's information
- **Mongoose** to work with the MongoDB database
- **Validator** to check email addresses and URLs
- **bcryptjs** to protect user passwords
- **JSON Web Tokens** to keep users signed in
- **CORS** to allow the front end to communicate with the server
- Routes, controllers, models, and middleware to keep the code organized
- Error handling to respond when data is invalid or cannot be found
- **Nodemon** to restart the server while I work
- **ESLint and Prettier** to help keep the code clean and consistent

## Running the Project

Install the project packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Start the regular server:

```bash
npm run start
```

The server runs on port `3001` by default.

## Checking the Code

Run the following command to check the code:

```bash
npm run lint
```

Before submitting the project, the `sprint.txt` file should contain the current sprint number.
