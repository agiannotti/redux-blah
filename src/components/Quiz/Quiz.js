import { useSelector } from 'react-redux';

const Quiz = () => {
  const { questions } = useSelector((state) => state.questions);
  // const dispatch = useDispatch();
  return questions.map((question, id) => (
    <li key={id}>
      {question.id}
      {question.title}
    </li>
  ));
};

export default Quiz;
