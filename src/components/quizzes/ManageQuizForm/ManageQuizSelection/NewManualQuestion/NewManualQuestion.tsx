import { FC } from 'react';

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';

import classes from './NewManualQuestion.module.css';

interface NewManualQuesitonProps {
  question: string;
  answer: string;
  onInputQuestion: (value: string) => void;
  onInputAnswer: (value: string) => void;
}

const NewManualQuesiton: FC<NewManualQuesitonProps> = (props) => {
  return (
    <div className={classes.inputs}>
      <FormControl
        sx={{
          backgroundColor: 'wheat'
        }}
      >
        <TextField
          label="Question"
          multiline
          minRows={5}
          color="secondary"
          value={props.question}
          onChange={(event) => props.onInputQuestion(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ backgroundColor: 'wheat' }} color="secondary">
        <InputLabel>Answer</InputLabel>
        <OutlinedInput
          label="Answer"
          value={props.answer}
          onChange={(event) => props.onInputAnswer(event.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default NewManualQuesiton;
