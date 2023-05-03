import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../../../components/shared/Card/Card';
import QuizCardContent from '../../../components/quizzes/QuizCardContent/QuizCardContent';
import QuestionSlideshowControls from '../../../components/quizzes/QuestionSlideshowControls/QuestionSlideshowControls';
import AnimatedPage from '../../../components/shared/AnimatedPage/AnimatedPage';

import { Quiz as QuizType } from '../../../util/types/quiz';

const Quiz: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [controlsDisabled, setControlsDisabled] = useState<boolean>(false);

  const quiz = useLoaderData() as QuizType;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <AnimatedPage>
      <h1 style={{marginTop: '-5rem', marginBottom: '5rem'}}>{quiz.name}</h1>
      <Card
        style={{
          backgroundColor: 'violet',
          padding: '2rem',
          width: '80vw',
          fontSize: '1rem',
          display: 'flex',
          flexDirection: 'column',
          height: 400,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <QuizCardContent
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          onAnimationFinish={() => setControlsDisabled(false)}
          onAnimationStart={() => setControlsDisabled(true)}
        />
        <QuestionSlideshowControls
          disabled={controlsDisabled}
          onPreviousQuestion={() =>
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
          }
          onNextQuestion={() =>
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
          }
          currentQuestionIndex={currentQuestionIndex}
          questions={quiz.questions}
        />
      </Card>
    </AnimatedPage>
  );
};

export default Quiz;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const quizId = params.id;

  const response = await fetch(`http://localhost:3001/quizzes/${quizId}`);

  if (!response.ok) {
    throw { message: `Could not fetch quiz with ID of ${quizId}`, status: 500 };
  }

  return await response.json();
};
