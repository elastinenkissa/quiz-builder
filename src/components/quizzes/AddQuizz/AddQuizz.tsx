import { FC } from 'react';

import { Add } from '@mui/icons-material';

import Card from '../../shared/Card/Card';

import classes from './AddQuizz.module.css';

const AddQuizz: FC = () => {
  return (
    <Card className={classes.container}>
      <Add />
    </Card>
  );
};

export default AddQuizz;
