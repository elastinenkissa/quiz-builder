import { FC } from 'react';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { Question } from '../../../util/types/question';

import classes from './QuestionSlideshowControls.module.css';

interface QuestionSlideshowControlsProps {
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  currentQuestionIndex: number;
  questions: Array<Question>;
  disabled: boolean;
}

const QuestionSlideshowControls: FC<QuestionSlideshowControlsProps> = (
  props
) => {
  const previousQuestionHandler = () => {
    if (!props.disabled) {
      props.onPreviousQuestion();
    }
  };

  const nextQuestionHandler = () => {
    if (!props.disabled) {
      props.onNextQuestion();
    }
  };

  return (
    <div className={classes.buttons}>
      <ArrowBackIos
        onClick={previousQuestionHandler}
        sx={{
          visibility: props.currentQuestionIndex === 0 ? 'hidden' : 'visible'
        }}
      />
      <ArrowForwardIos
        onClick={nextQuestionHandler}
        sx={{
          visibility:
            props.currentQuestionIndex + 1 === props.questions.length
              ? 'hidden'
              : 'visible'
        }}
      />
    </div>
  );
};

export default QuestionSlideshowControls;
