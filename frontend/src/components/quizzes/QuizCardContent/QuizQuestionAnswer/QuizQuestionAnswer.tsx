import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Quiz } from '@mui/icons-material';

import ClickableIcon from '../../../shared/ClickableIcon/ClickableIcon';

import { Question } from '../../../../util/types/question';

interface QuizQuestionAnswerProps {
  answerIsShown: boolean;
  question: Question;
  onShowAnswer: () => void;
}

const QuizQuestionAnswer: FC<QuizQuestionAnswerProps> = (props) => {
  return (
    <>
      {!props.answerIsShown && (
        <ClickableIcon
          onClick={props.onShowAnswer}
          icon={<Quiz fontSize="large" htmlColor="wheat" />}
        />
      )}
      <CSSTransition
        in={props.answerIsShown}
        timeout={500}
        classNames="appear"
        mountOnEnter
        unmountOnExit
      >
        <h2>{props.answerIsShown ? props.question.answer : 'Nice try :)'}</h2>
      </CSSTransition>
    </>
  );
};

export default QuizQuestionAnswer;
