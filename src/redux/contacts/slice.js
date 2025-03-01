import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
// } from "./contacts/operations";
// import { selectContacts } from "./selectors";
// import { selectNameFilter } from "../filters/selectors";

const initialState = {
  items: [
    // {
    //   createdAt: "28092",
    //   name: "Carlton Durgan",
    //   phone: "659-987-6178",
    //   id: "3",
    // },
    // {
    //   createdAt: "6578",
    //   name: "Janie Morissette",
    //   phone: "835-500-1009",
    //   id: "4",
    // },
    // {
    //   createdAt: "893",
    //   name: "Misty Kertzmann",
    //   phone: "708-951-3888",
    //   id: "5",
    // },
    // {
    //   createdAt: "534",
    //   name: "Mabel Crooks",
    //   phone: "805-715-2488",
    //   id: "6",
    // },
    // {
    //   createdAt: "7041",
    //   name: "Darin Ritchie",
    //   phone: "745-297-1957",
    //   id: "7",
    // },
    // {
    //   createdAt: "6796",
    //   name: "Mr. Aaron Reinger",
    //   phone: "636-356-7581",
    //   id: "8",
    // },
    // {
    //   createdAt: "870",
    //   name: "Teri Johnson",
    //   phone: "666-661-5524",
    //   id: "9",
    // },
    // {
    //   createdAt: "0721",
    //   name: "Virginia Leffler",
    //   phone: "756-966-9531",
    //   id: "10",
    // },
    // {
    //   createdAt: "705",
    //   name: "Ida Kilback",
    //   phone: "238-815-6775",
    //   id: "11",
    // },
    // {
    //   createdAt: "37857",
    //   name: "Bobbie Ortiz",
    //   phone: "400-905-2677",
    //   id: "12",
    // },
    // {
    //   createdAt: "835",
    //   name: "Sheila Schultz",
    //   phone: "515-316-7018",
    //   id: "13",
    // },
    // {
    //   createdAt: "951",
    //   name: "Elisa Moen II",
    //   phone: "609-697-2618",
    //   id: "14",
    // },
    // {
    //   createdAt: "67073",
    //   name: "Mr. Thelma Bahringer",
    //   phone: "279-414-1656",
    //   id: "15",
    // },
    // {
    //   createdAt: "199",
    //   name: "Walter Mosciski",
    //   phone: "643-241-8215",
    //   id: "16",
    // },
    // {
    //   createdAt: "264",
    //   name: "Amanda Rutherford",
    //   phone: "551-564-7306",
    //   id: "17",
    // },
    // {
    //   createdAt: "8787",
    //   name: "Gustavo Grimes DDS",
    //   phone: "941-822-8859",
    //   id: "18",
    // },
    // {
    //   createdAt: "412",
    //   name: "Josephine Konopelski",
    //   phone: "912-555-8851",
    //   id: "19",
    // },
    // {
    //   createdAt: "19315",
    //   name: "Helen Romaguera",
    //   phone: "761-947-4825",
    //   id: "20",
    // },
    // {
    //   createdAt: "6734",
    //   name: "Wade Blanda",
    //   phone: "552-282-2248",
    //   id: "22",
    // },
    // {
    //   createdAt: "89594",
    //   name: "Ms. Norman Cormier",
    //   phone: "801-646-1028",
    //   id: "23",
    // },
  ],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
