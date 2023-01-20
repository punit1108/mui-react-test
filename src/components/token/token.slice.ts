import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: localStorage.getItem("token") || ''
}

export const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<TokenState>) => {
      localStorage.setItem("token", action.payload.token);
      state = action.payload;
      return state;
    }
  }
})

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;