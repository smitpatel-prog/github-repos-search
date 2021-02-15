# GitHub Repository Search

GitHub Repository Search is an application that fetches the repository of a user by their username. The UI of this application is build on React and ulitizes GitHub graphQL API to retrive the desired list.

## User Interface

The application has a search bar where user can type the username for whom repo list must be shown. If the user is found, their name and profile photo is displayed along with their repository, otherwise, no users found is displayed.

## Screenshots

### `Light Mode`
![Alt text](/src/assets/light.PNG?raw=true "Light")


### `Night Mode`
![Alt text](/src/assets/dark.PNG?raw=true "Dark")

## GraphQL
The GitHub GraphQL API offers flexibility and the ability to define precisely the data you want to fetch.

API Endpoint: 
```https://api.github.com/graphql```

### Authentication

A persnal access token needs to be passed to the server in order to authenticate the user and obtain successful response. The step-by-step guide to create the token and pass it in the headers of each API call is provided at ```https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token```

### `Testing GraphQL Query`

Because GraphQL operations consist of multiline JSON, GitHub recommends using the [https://docs.github.com/en/graphql/guides/using-the-explorer](Explorer) to make GraphQL calls. You can also use cURL or any other HTTP-speaking library.

### `Sample Request`

```
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

## React
The application is developed on React v17 along with Axios v0.21 for making API calls and Bootstrap v4.6 for styling.

### `Axios`
Axios is a promise-based HTTP client that is used to make API calls to the server.

### `Bootstrap`
Bootstrap is an open-source CSS framework that is used to create responsive, mobile-first application.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
