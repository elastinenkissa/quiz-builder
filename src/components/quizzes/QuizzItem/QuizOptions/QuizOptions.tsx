import { FC } from 'react';
import { useNavigate } from 'react-router';

import { Delete, Edit, Visibility } from '@mui/icons-material';

import ClickableIcon from '../../../shared/ClickableIcon/ClickableIcon';

import { Quiz } from '../../../../util/types/quiz';
import { baseUrl } from '../../../../util/config/baseApiUrl';

import classes from './QuizOptions.module.css';

interface QuizOptionsProps {
  quiz: Quiz;
  onDelete: (id: number) => void;
}

const QuizOptions: FC<QuizOptionsProps> = (props) => {
  const navigate = useNavigate();

  const displayQuizHandler = () => {
    navigate(`/${props.quiz.id}`);
  };

  const editQuizHandler = () => {
    navigate(`/manage/${props.quiz.id}`);
  };

  const deleteQuizHandler = async () => {
    if (
      window.confirm(
        `Da li si siguran da želiš obrisati kviz ${props.quiz.name} `
      )
    ) {
      await fetch(`${baseUrl}/quizzes/${props.quiz.id}`, {
        method: 'DELETE'
      });
      props.onDelete(props.quiz.id);
    }
  };

  return (
    <div className={classes.buttons}>
      <ClickableIcon
        onClick={displayQuizHandler}
        icon={<Visibility htmlColor="#ff99cc" fontSize="large" />}
      />
      <ClickableIcon
        icon={<Edit fontSize="large" htmlColor="#b5ecda" />}
        onClick={editQuizHandler}
      />
      <ClickableIcon
        onClick={deleteQuizHandler}
        icon={<Delete htmlColor="#fd6d89" fontSize="large" />}
      />
    </div>
  );
};

export default QuizOptions;
