import { FC } from 'react';

import Card from '../../shared/Card/Card';
import QuizOptions from './QuizOptions/QuizOptions';

import { Quiz } from '../../../util/types/quiz';

import classes from './QuizzItem.module.css';

interface QuizzItemProps {
  quiz: Quiz;
  onDelete: (id: number) => void;
}

const QuizzItem: FC<QuizzItemProps> = (props) => {
  return (
    <>
      <Card className={classes.container} style={{width: 300, height: 200}}>
        <p>{props.quiz.name}</p>
        <QuizOptions
          onDelete={(id) => props.onDelete(id)}
          quiz={props.quiz}
        />
      </Card>
    </>
  );
};

export default QuizzItem;
