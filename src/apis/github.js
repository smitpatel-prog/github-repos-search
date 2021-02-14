import axios from "axios";

export  default axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: { Authorization: "bearer 592f2a247c9e3aa4f55eabf5834b94d5dafc97c2"} 
});
