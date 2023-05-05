import { FC } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { Question } from '../../../../../util/types/question';

interface NewExistingQuestionProps {
  questions: Array<Question>;
  questionId: string;
  onQuestionSelect: (value: string) => void;
}

const NewExistingQuestion: FC<NewExistingQuestionProps> = (props) => {
  return (
    <FormControl
      sx={{ backgroundColor: 'wheat', width: '40%' }}
      color="secondary"
    >
      <InputLabel>Select a quesiton</InputLabel>
      <Select
        defaultValue="Select a question"
        value={props.questionId}
        onChange={(event) => props.onQuestionSelect(event.target.value)}
        label="Select a question"
      >
        <MenuItem value="" sx={{ color: 'gray' }}>
          <em>Select a question</em>
        </MenuItem>
        {props.questions.map((question) => (
          <MenuItem key={question.id} value={question.id}>
            {question.question.slice(0, 15)}...
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NewExistingQuestion;
