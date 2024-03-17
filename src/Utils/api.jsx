import axios from "axios";

export const BASE_URL = "http://api.nytimes.com/svc/";
const API_KEY = "y60FlDGALrUJ9n85oed2h8AtJsrKLZV5"

export const fetchDataFromApi = async (url) => {
  try {
    const data  = await axios.get(BASE_URL + url + API_KEY);
    return data;
  } catch (err) {
    console.error("error:", err);
    throw err; 
  }
};
