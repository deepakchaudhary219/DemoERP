import { createSlice } from '@reduxjs/toolkit';

interface VisibilityState {
  showTypography: boolean;
}

const initialState: VisibilityState = {
  showTypography: false,
};

export const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    setShowTypography: (state, action) => {
      state.showTypography = action.payload;
    },
  },
});

export const { setShowTypography } = visibilitySlice.actions;

export default visibilitySlice.reducer;
