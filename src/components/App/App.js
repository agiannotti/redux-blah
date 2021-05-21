import React from 'react';
import { useSelector } from 'react-redux';
import Main from '../../components/Main/Main';
import Quiz from '../Quiz/Quiz';
import Results from '../Results/Results';

const App = () => {
  const { quizState } = useSelector((state) => state.quizState);

  return (
    <>
      <Main />

      {quizState === 'main' && <Main />}
      {quizState === 'quiz' && <Quiz />}
      {quizState === 'results' && <Results />}
    </>
  );
};

export default App;
