import axios from 'axios';

let withCredentials = true

export const formRequest = axios.create({
  baseURL: "/api",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  withCredentials
})