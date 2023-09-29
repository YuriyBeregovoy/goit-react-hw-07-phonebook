import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://65153a2bdc3282a6a3ce0b27.mockapi.io";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }





)