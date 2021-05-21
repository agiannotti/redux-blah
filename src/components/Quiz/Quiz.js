const Quiz = () => {
  return this.props.quizzes.map((quiz, id) => (
    <li key={id}>
      {quiz.id}
      {quiz.title}
    </li>
  ));
};

export default Quiz;
