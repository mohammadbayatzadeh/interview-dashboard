import axios from "axios";

export const getUsers = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data || false);
