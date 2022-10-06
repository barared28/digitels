import axios from "axios";

const API = axios.create({
    baseURL: "https://todos-project-api.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
});

const token = process.env.REACT_APP_TOKEN || '';

if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default API;