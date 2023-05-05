import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import AnimatedPage from '../../../components/shared/AnimatedPage/AnimatedPage';
import ManageQuizForm from '../../../components/quizzes/ManageQuizForm/ManageQuizForm';

import { Quiz } from '../../../util/types/quiz';

const ManageQuiz: FC = () => {
  const quiz = useLoaderData() as Quiz;

  return (
    <AnimatedPage>
      <ManageQuizForm quiz={quiz} />
    </AnimatedPage>
  );
};

export default ManageQuiz;
