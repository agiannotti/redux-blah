import { useSelector } from 'react-redux';

const Quiz = () => {
  const { questions } = useSelector((state) => state.questions);
  let qNum = 0;
  let answerArr = [];
  answerArr.push(
    questions[qNum].questions[0].correctAnswer +
      ',' +
      questions[qNum].questions[0].incorrectAnswers
  );

  return answerArr.map((answer, id) => (
    <ul key='id'>
      <li>{answer}</li>
    </ul>
  ));
};

export default Quiz;
