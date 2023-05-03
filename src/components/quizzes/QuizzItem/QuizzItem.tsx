import { FC } from 'react';

import Card from '../../shared/Card/Card';
import QuizManagement from './QuizManagement/QuizManagement';

import { Quiz } from '../../../util/types/quiz';

import classes from './QuizzItem.module.css';

interface QuizzItemProps {
  quiz: Quiz;
  onDelete: () => void;
}

const QuizzItem: FC<QuizzItemProps> = (props) => {
  return (
    <>
      <Card className={classes.container}>
        <p>{props.quiz.name}</p>
        <QuizManagement onDelete={props.onDelete} quiz={props.quiz} />
      </Card>
    </>
  );
};

export default QuizzItem;
