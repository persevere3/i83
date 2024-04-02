import axios from 'axios';

const baseURL = process.env.NODE_ENV === "development" ? "/myapp/api" : "/myapp/api"

export const jsonRequest = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})