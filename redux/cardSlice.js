// store/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    selectedCard: null, // Seçilen kart bilgisi
  },
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { setSelectedCard } = cardSlice.actions;
export default cardSlice.reducer;
