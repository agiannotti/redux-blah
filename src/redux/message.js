import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [
      'Aww yes!',
      'Nice job!',
      'Hooray for you!',
      'Sweet!',
      'Yasssssss!',
      "You're a star!",
      'Way to go!',
    ],
  },
  reducers: {},
});

export const {} = messageSlice.actions;

export default messageSlice.reducer;

// messageReducer = () => messages[(Math.random() * messages.length) | 0];
