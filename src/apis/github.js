import axios from "axios";

export  default axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: `bearer   ${process.env.REACT_APP_AUTH_TOKEN} ` }
});
