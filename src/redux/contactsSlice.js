import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

  

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {},
    [fetchContacts.rejected](state, action) {},
  },
  
});

export const contactsReducer = contactsSlice.reducer;
