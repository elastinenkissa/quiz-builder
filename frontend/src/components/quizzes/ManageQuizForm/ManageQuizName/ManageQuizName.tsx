import { FC, useState } from 'react';

import { FormControl, Input } from '@mui/material';

interface ManageQuizNameProps {
  quizName: string;
  onChangeName: (name: string) => void;
}

const ManageQuizName: FC<ManageQuizNameProps> = (props) => {
  const [name, setName] = useState<string>(props.quizName);

  const clickAwayHandler = () => {
    if (name !== props.quizName) {
      props.onChangeName(name);
    }
  };

  return (
    <FormControl sx={{ alignItems: 'flex-start' }}>
      <Input
        spellCheck={false}
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={clickAwayHandler}
        fullWidth
        sx={{
          color: 'white',
          height: 'inherit',
          fontSize: '2em',
          fontWeight: 'bold'
        }}
        disableUnderline
      />
    </FormControl>
  );
};

export default ManageQuizName;
