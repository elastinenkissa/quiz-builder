import { FC } from 'react';

import QuestionContainer from '../../QuestionContainer/QuestionContainer';
import ClickableIcon from '../../../../shared/ClickableIcon/ClickableIcon';

import { Question } from '../../../../../util/types/question';
import { Remove } from '@mui/icons-material';

interface QuestionItemProps {
  question: Question;
}

const QuestionItem: FC<QuestionItemProps> = (props) => {
  return (
    <QuestionContainer style={{ position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>{props.question.question}</p>
        <p>{props.question.answer}</p>
      </div>
      <div style={{ position: 'absolute', right: 0 }}>
        <ClickableIcon icon={<Remove />} />
      </div>
    </QuestionContainer>
  );
};

export default QuestionItem;
