import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UseState {
  name: string;
  email: string;
}

const initialState: UseState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UseState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
