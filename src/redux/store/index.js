import { configureStore } from '@reduxjs/toolkit';
import findFilmSlice from "../slices/fineFilmSlice";
import selectedSlice from "../slices/selectedSlice";
import favouriteSlice from "../slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    find: findFilmSlice,
    selected: selectedSlice,
    favourites: favouriteSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

