# MechaTracker

**Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Link](#link)
- [Credits](#credit)

## Overview

MechaTracker is a comprehensive vehicle issue tracking system designed to manage and monitor mechanical issues within a fleet of vehicles. This web-based application provides a centralized platform for users to report issues, manage vehicle information, and track maintenance tasks with ease.

## Features

### Tracking and Management Features

- **Issue Reporting**: Users can report new issues, providing detailed descriptions and relevant information for each vehicle.
- **Vehicle Information Management**: Detailed records of each vehicle can be maintained and accessed, facilitating better inventory and operational management.
- **User Authentication**: Incorporates secure login functionality, with password hashing to protect user data.
- **Responsive Design**: Utilizes the Bulma CSS framework to ensure a modern, responsive user interface for a seamless experience across different devices.
- **Data Seeding**: The system comes with pre-populated data for vehicles, users, and issues to enable quick setup and demonstration.

### Interface and Interaction

- **Sleek User Interface**: A clean and intuitive interface powered by Bulma, providing users with a straightforward navigation experience.
- **Interactive Elements**: Dynamic forms and tables for issue reporting and vehicle management, ensuring a user-friendly interaction.

### Customization and Extension

- **Modular Design**: The application's modular architecture allows easy customization and extension of its core functionalities.
- **Bulma Integration**: Bulma styles are integrated with custom CSS for a unique and customizable appearance.

## Usage

Visit https://vast-hollows-90691-d0b1e830c019.herokuapp.com/login to start managing your vehicle issues.

### How to Use MechaTracker

1. **Login/Logout **: Access the application and log in with the seed user data. You can also logout with the click of a button!
2. **Dashboard**: Upon logging in, navigate through the dashboard to view all the reported issues and vehicle details.
3. **Report an Issue**: Select the 'Report Issue' option to submit new issues. Fill out the form with the necessary vehicle information and the issue's details.
4. **Manage Vehicles**: View the vehicles in the backlog and create a visible list of VIN IDs.
5. **Track Issues**: Keep an eye on the status of reported issues and follow up on their resolution from the main dashboard.
6. **User Profile**: Manage your account details through a unique login.

## Credits

MechaTracker is built with the help of the following open-source technologies:

- [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars): A Handlebars view engine for Express which doesn't suck.
- [Handlebars](https://handlebarsjs.com/): A minimalist JavaScript templating engine.
- [MySQL2](https://www.npmjs.com/package/mysql2): A MySQL client for Node.js with focus on performance.
- [Sequelize](https://sequelize.org/): A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library to help you hash passwords.
- [Connect-Session-Sequelize](https://www.npmjs.com/package/connect-session-sequelize): A SQL session store using Sequelize.js.
- [dotenv](https://www.npmjs.com/package/dotenv): A module that loads environment variables from a `.env` file into `process.env`.
- [Express-Session](https://www.npmjs.com/package/express-session): Simple session middleware for Express.

### Development Dependencies

- [Jest](https://jestjs.io/): A delightful JavaScript Testing Framework with a focus on simplicity.
- [Nodemon](https://nodemon.io/): A utility that will monitor for any changes in your source and automatically restart your server.
- [Supertest](https://www.npmjs.com/package/supertest): A Super-agent driven library for testing HTTP servers.


