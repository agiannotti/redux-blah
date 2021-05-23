import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../../redux/quizState';

const Main = () => {
  const { quizState } = useSelector((state) => state.quizState);
  const dispatch = useDispatch();
  return (
    <div className='main'>
      <button onClick={() => dispatch(quiz())}>Begin Quiz</button>
    </div>
  );
};

export default Main;
