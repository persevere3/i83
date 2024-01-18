import axios from 'axios';

let withCredentials = true

export const jsonRequest = axios.create({
  baseURL: "/api",
  headers: { 'Content-Type': 'application/json' },
  withCredentials
})