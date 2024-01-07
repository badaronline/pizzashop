# Pizza Shop App

![Online Pizza Shop Screenshot](https://ibb.co/W3mYmkW)

This project is a pizza shop application created with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

Ensure you have Node.js installed before following the steps below.

1. Clone the repository: `git clone https://github.com/badaronline/pizzashop.git`
2. Navigate to the project directory: `cd pizzashop`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app for full control over configurations.

## Features

- Stripe Integration:

  Our pizza shop app seamlessly integrates with Stripe for secure and efficient payment processing.

- Redux State Management:

  Utilizing Redux for state management ensures a robust and scalable architecture, providing a centralized store for application data.

- Password Hashing:

  User passwords are securely hashed to enhance the security of user accounts.

## File Structure

//Client//

- Src
  - Screens
    - HomeScreen.jsx
    - CartScreen.jsx
    - RegisterScreen.jsx
    - LoginScreen.jsx
    - OrderScreen.jsx
  - Components
    - About.jsx
    - Contact.jsx
    - Policy.jsx
    - NavBar.jsx
    - TopBar.jsx
    - Pizza.jsx
    - Checkout.jsx
    - Filters.jsx
    - Loader.jsx
    - Success.jsx
    - Error.jsx
  - Actions
    - pizzaAction.js
    - cartAction.js
    - userAction.js
    - OrderAction.js
  - Reducers
    - pizzaReducer.js
    - cartReducer.js
    - userReducer.js
    - orderReducer.js
- index.js
- App.js
- store.js

- //Server//
  - Models
    - pizzaModel.js
    - userModel.js
    - orderModel.js
  - Routes
    - pizzaRoute.js
    - userRoute.js
    - orderRoute.js
- server.js
