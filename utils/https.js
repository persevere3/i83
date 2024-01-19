import axios from 'axios';

let withCredentials = true

const baseURL = process.env.NODE_ENV === "development" ? "/api" : "https://preview.uniqcarttest.com/api"

export const jsonRequest = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials
})