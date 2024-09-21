import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a389fe998af64037bde68179290f9376",
  },
});
