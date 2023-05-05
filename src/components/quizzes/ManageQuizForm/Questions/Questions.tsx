import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import QuestionItem from './QuestionItem/QuestionItem';

import { Question } from '../../../../util/types/question';

interface QuestionsProps {
  questions: Array<Question>;
  onRemoveQuestion: (questionId: number) => void;
}

const Questions: FC<QuestionsProps> = (props) => {
  return (
    <>
      {props.questions.map((question) => (
        <QuestionItem
          question={question}
          key={uuid()}
          onRemoveQuestion={() => props.onRemoveQuestion(question.id!)}
        />
      ))}
    </>
  );
};

export default Questions;
