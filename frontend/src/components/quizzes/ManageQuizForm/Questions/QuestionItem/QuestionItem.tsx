import { FC } from 'react';

import QuestionContainer from '../../QuestionContainer/QuestionContainer';
import ClickableIcon from '../../../../shared/ClickableIcon/ClickableIcon';

import { Question } from '../../../../../util/types/question';
import { Remove } from '@mui/icons-material';

interface QuestionItemProps {
  question: Question;
  onRemoveQuestion: () => void;
}

const QuestionItem: FC<QuestionItemProps> = (props) => {
  return (
    <QuestionContainer style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          textAlign: 'center'
        }}
      >
        <p>{props.question.question}</p>
        <h2>{props.question.answer}</h2>
      </div>
      {props.question.id && (
        <div style={{ position: 'absolute', right: 0, top: 0 }}>
          <ClickableIcon
            onClick={props.onRemoveQuestion}
            icon={<Remove fontSize="large" />}
          />
        </div>
      )}
    </QuestionContainer>
  );
};

export default QuestionItem;
