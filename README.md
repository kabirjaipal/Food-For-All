# Food Management Website

## Overview

Welcome to the Food Management Website, a web application built using Next.js, React.js, Mongoose, Tailwind CSS, TypeScript, and Clerk.js. This project aims to provide a comprehensive solution for managing and organizing food-related data.

## Features

- **User Authentication**: Utilizes Clerk.js for secure and easy-to-implement user authentication.

- **Food Data Management**: Allows users to add, edit, and delete food items with relevant details such as name, category, and expiration date.

- **Responsive Design**: Developed with a responsive and user-friendly interface using Tailwind CSS for a seamless experience on various devices.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.

- **React.js**: A JavaScript library for building user interfaces.

- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

- **TypeScript**: A superset of JavaScript that adds static types to the language.

- **Clerk.js**: A secure authentication service for modern web applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/food-management-website.git
   ```

2. Install dependencies:

   ```bash
   cd food-management-website
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root of the project and provide the necessary environment variables, such as MongoDB connection string and Clerk.js API key.

   ```dotenv
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

4. Run the application:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Configuration

Ensure to customize the application based on your specific requirements by modifying configuration files and updating the styles and components as needed.

## Contributing

Feel free to contribute to the project by opening issues, providing feedback, or submitting pull requests. Your contributions are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the creators and maintainers of the libraries and frameworks used in this project. Without their dedication, this project would not have been possible.
