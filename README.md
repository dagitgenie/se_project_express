# WTWR (What to Wear?): Back End

## About the Project

This project is focused on creating the back-end server for the WTWR application. The server stores the information for the users and their clothing items. The goal is to create an API that allows the front end to work with this information.

While working on this project, I am learning more about servers, databases, security, testing, and how the different parts of an application communicate with each other. A complete user authorization system will be added as the project continues.

## Functionality

The server can currently:

- Create and display users
- Find a user by their ID
- Create and display clothing items
- Delete clothing items
- Add and remove likes from clothing items
- Check that the information being entered is valid
- Return helpful responses when something goes wrong

## Technologies and Techniques Used

- **Node.js** to run the back-end code
- **Express.js** to create the server and routes
- **MongoDB** to store the application's information
- **Mongoose** to work with the MongoDB database
- **Validator** to check URLs
- Routes, controllers, and models to keep the code organized
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
