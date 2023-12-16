import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Add } from '@mui/icons-material';

import Card from '../../shared/Card/Card';

import classes from './AddQuizz.module.css';

const AddQuizz: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      className={classes.container}
      onClick={() => navigate('/manage/new')}
      style={{ width: 300, height: 200, padding: '2rem' }}
    >
      <Add />
    </Card>
  );
};

export default AddQuizz;
