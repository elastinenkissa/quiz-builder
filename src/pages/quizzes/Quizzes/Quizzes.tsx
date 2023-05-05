import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import QuizzItem from '../../../components/quizzes/QuizzItem/QuizzItem';
import AddQuizz from '../../../components/quizzes/AddQuizz/AddQuizz';
import AnimatedPage from '../../../components/shared/AnimatedPage/AnimatedPage';

import { Quiz } from '../../../util/types/quiz';

import classes from './Quizzes.module.css';

const Quizzes: FC = () => {
  const [quizzes, setQuizzes] = useState<Array<Quiz>>(
    useLoaderData() as Array<Quiz>
  );

  return (
    <AnimatedPage>
      <div className={classes.container}>
        {quizzes.map((currentQuiz) => (
          <QuizzItem
            key={currentQuiz.id}
            quiz={currentQuiz}
            onDelete={(id) =>
              setQuizzes((prevQuizzes) =>
                prevQuizzes.filter((quiz) => quiz.id !== id)
              )
            }
          />
        ))}
        <AddQuizz />
      </div>
    </AnimatedPage>
  );
};

export default Quizzes;