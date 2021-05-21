import { createSlice } from '@reduxjs/toolkit';

export const quizStateSlice = createSlice({
  name: 'quizState',
  initialState: {
    quizState: '',
  },
  reducers: {
    main: (state) => {
      state.quizState = 'main';
    },
    quiz: (state) => {
      state.quizState = 'quiz';
    },
    results: (state) => {
      state.quizState = 'results';
    },
  },
});

export const { main, quiz, results } = quizStateSlice.actions;

export default quizStateSlice.reducer;
