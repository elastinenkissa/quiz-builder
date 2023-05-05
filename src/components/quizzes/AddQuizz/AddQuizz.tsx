import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Add } from '@mui/icons-material';

import Card from '../../shared/Card/Card';

import classes from './AddQuizz.module.css';

const AddQuizz: FC = () => {
  const navigate = useNavigate();

  return (
    <Card className={classes.container} onClick={() => navigate('/manage/new')}>
      <Add />
    </Card>
  );
};

export default AddQuizz;
