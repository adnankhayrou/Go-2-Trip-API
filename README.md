# Go-2-Trip-API

### Overview
Go2Trip is a website for selling trip products online. The website allows users to sell trip products they no longer use.

### objective
I created this website to meet the needs of travelers in my country, where the options available are limited. Department stores offer travel items, but their quality is poor and prices are extreme. My main goal of this website is to offer a selection of travel products.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Git installed on your machine.

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repository:
    ```bash
    git clone https://github.com/adnankhayrou/Go-2-Trip-API.git
    ```
3. Install dependencies using npm:
    ```bash
    npm install
    ```

## Available Scripts
In the project directory, you can run:

### npm run dev
The App Run on Port 3000

### npm run test
To run unit tests of the App

## Additional Dependencies

The following additional dependencies are part of the project:

1. **bcryptjs**
   - **Version**: ^2.4.3
   - **Description**: Library for securely hashing and storing passwords.

2. **cookie-parser**
   - **Version**: ^1.4.6
   - **Description**: Middleware for parsing cookies attached to HTTP requests.

3. **cors**
   - **Version**: ^2.8.5
   - **Description**: Package for providing a Connect/Express middleware that can be used to enable CORS with various options.

4. **express**
   - **Version**: ^4.18.2
   - **Description**: Web application framework for Node.js.

5. **joi**
   - **Version**: ^17.11.0
   - **Description**: Object schema description language and validator for JavaScript objects.

6. **jsonwebtoken**
   - **Version**: ^9.0.2
   - **Description**: Implementation of JSON Web Tokens for authentication.

7. **mongoose**
   - **Version**: ^7.6.2
   - **Description**: Elegant MongoDB object modeling for Node.js.

8. **nodemailer**
   - **Version**: ^6.9.6
   - **Description**: Module for Node.js applications to allow easy email sending.

9. **swagger-jsdoc**
   - **Version**: ^6.2.8
   - **Description**: Enables to define Swagger OpenAPI 3.0/2.0 Specification in JavaScript comments.

10. **swagger-ui-express**
    - **Version**: ^5.0.0
    - **Description**: Package for serving auto-generated Swagger UI for Express.

11. **dotenv**
    - **Version**: ^16.3.1
    - **Description**: Loads environment variables from a .env file into process.env.

12. **jest**
    - **Version**: ^29.7.0
    - **Description**: JavaScript Testing Framework.

13. **nodemon**
    - **Version**: ^3.0.1
    - **Description**: Utility that automatically restarts the node process when a file changes.


### Project Structure
The project has the following directories:

- **Controllers**: Contains controllers for different routes and actions.
- **Middlewares**: Custom middleware functions.
- **Routes**: Express routes for different parts of the application.
- **mailer**: A directory for send mails to users.
- **models**: A directory interact with data base .
- **requests**: A directory for validation the data .
- **tests**: A directory for unit tests for the functions .
