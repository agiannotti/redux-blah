import { configureStore } from '@reduxjs/toolkit';
import quizStateReducer from './quizState';
import messageReducer from './message';
import questionReducer from './questions';

export default configureStore({
  reducer: {
    quizState: quizStateReducer,
    messages: messageReducer,
    questions: questionReducer,
  },
});
