import { FC } from 'react';
import { useNavigate } from 'react-router';

import { Delete, Edit, Visibility } from '@mui/icons-material';

import ClickableIcon from '../../../shared/ClickableIcon/ClickableIcon';

import { Quiz } from '../../../../util/types/quiz';

import classes from './QuizManagement.module.css';

interface QuizManagementProps {
  quiz: Quiz;
  onDelete: () => void;
}

const QuizManagement: FC<QuizManagementProps> = (props) => {
  const navigate = useNavigate();

  const displayQuizHandler = () => {
    navigate(`/${props.quiz.id}`);
  };

  const deleteQuizHandler = async () => {
    if (
      window.confirm(
        `Da li si siguran da želiš obrisati kviz ${props.quiz.name} `
      )
    ) {
      await fetch(`http://localhost:3001/quizzes/${props.quiz.id}`, {
        method: 'DELETE'
      });
      props.onDelete();
    }
  };

  return (
    <div className={classes.buttons}>
      <ClickableIcon
        onClick={displayQuizHandler}
        icon={<Visibility htmlColor="#ff99cc" fontSize="large" />}
      />
      <ClickableIcon icon={<Edit fontSize="large" htmlColor="#b5ecda" />} />
      <ClickableIcon
        onClick={deleteQuizHandler}
        icon={<Delete htmlColor="#fd6d89" fontSize="large" />}
      />
    </div>
  );
};

export default QuizManagement;
