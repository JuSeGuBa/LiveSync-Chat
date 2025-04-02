import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UseState {
  name: string;
}

const initialState: UseState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UseState>) => {
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.name = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
