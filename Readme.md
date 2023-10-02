# URL Shortener

## Overview

The URL Shortener is a simple web application that allows users to shorten long URLs, making them more manageable and easier to share. It features a minimalistic design, a dark theme, and custom short ID creation. This project is implemented using HTML, CSS, JavaScript, Node.js, and MongoDB.

## Usage

### Prerequisites

- Node.js installed on your local machine.
- MongoDB set up and running.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Neeraj-x0/short-url.git
   ```
3. Navigate to the project directory:
   ```bash
   cd short-url
   ```
5. Install the project dependencies:
   ```bash
   npm install
   ```
7. Set up your MongoDB database and configure the connection string in the app.js file.

### Running the Application

1. Start the Node.js server:
   ```bash
   npm start
   ```
  The application will run at `http://localhost:3000`.
  
  Alternatively, you can access the deployed version of this application at [short.neerajx0.xyz](https://short.neerajx0.xyz).

3. Access the application in your web browser.


### Shortening URLs
1. Enter the long URL you want to shorten in the input field.
2. Optionally, provide a custom short ID to personalize the shortened URL.
3. Click the "Shorten" button.
4. The shortened URL will be displayed, and you can click it to open the original page.

### Using the POST Method Externally
To programmatically shorten URLs using the POST method externally, you can make a POST request to the following endpoint:

- Endpoint: `https://short.neerajx0.xyz/shorten`
  
Example using curl:
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "originalUrl": "https://www.example.com",
  "customShortId": "example"
}' https://short.neerajx0.xyz
```
Replace `https://short.neerajx0.xyz` with the actual URL of your deployed application.

### Dark Theme and Animations
The application features a dark theme and subtle animations for a polished and professional look.

### License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Neeraj-x0/short-url/blob/main/LICENSE) file for details.
