import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../../redux/quizState';

const Main = () => {
  const { quizState } = useSelector((state) => state.quizState);
  const dispatch = useDispatch();
  return (
    <div className='main'>
      <div>The state is {quizState}</div>
      <button onClick={() => dispatch(quiz())}>Begin Quiz</button>
    </div>
  );
};

export default Main;
