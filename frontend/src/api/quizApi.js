import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const fetchQuestions = () => API.get("/questions/");
export const submitRating = (data) => API.post("/ratings/", data);
