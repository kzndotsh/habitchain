# Habit
Habit is a productivity application based on the "Seinfeld Method" or "Don't Break the Chain" productivity strategy. It helps users to track their daily goals by marking off each day on a digital calendar with a big red X, encouraging a continuous chain of successful days.

## Features
- Track multiple goals daily without the need for multiple user accounts.
- Visualize your goals on a weekly, monthly, or yearly basis.
- Edit or remove mistakenly placed X marks to keep your progress accurate.

## How to Use
After logging in, users can mark each day they've achieved their goals with a big red X on a digital calendar. This feature enables users to build a visual streak of their accomplishments.

## Technologies Used
- React
- Node.js
- Express
- SQLite
- PeeWee
- JWT for authentication
- React Router for navigation
- HTML/CSS3 for markup and styling
- Bootstrap for responsive design
- axios for HTTP requests
- moment.js for date handling
- React Big Calendar for visualizing events

## Setup
Ensure that you have Node.js and npm installed on your system.

1. Clone the repository to your local machine.
2. Navigate to the `habit-app` directory.
3. Install the dependencies using the command `npm install`.
4. Start the application with `npm start`. It will be available at `http://localhost:3000`.

## API
The backend API allows for fetching and recording of goal completions. Authentication is managed via JWT.

To log in and acquire a token, use the `/login` endpoint. Then, include the token in the `Authorization` header for subsequent requests.

## Project Structure
Below is an overview of the project's folder and file structure:
```
habit-app/
  package.json
  README.md
  .gitignore
  public/
    index.html
    ...
  src/
    App.js
    index.js
    ...
  server/
    index.js
    routes/
      ...
    db/
      ...
    models/
      ...
```

## Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Follow the standard guidelines for React development to contribute to this project.

### `npm start`

Runs the app in the development mode.\ Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\ You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\ See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\ It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\ Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contribution
Contributions are welcome! Before contributing, please read the contribution guidelines. Make sure your pull requests are in line with the project goals.

## License
This project is open source and available under the MIT License. See the LICENSE file for more information.