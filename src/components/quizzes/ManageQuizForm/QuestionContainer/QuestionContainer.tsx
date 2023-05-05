import { FC, ReactNode } from 'react';

import { SxProps, Theme } from '@mui/material';

import Card from '../../../shared/Card/Card';

interface QuestionContainerProps {
  children: ReactNode;
  style?: SxProps<Theme>;
}

const QuestionContainer: FC<QuestionContainerProps> = (props) => {
  return (
    <Card
      style={{
        borderWidth: 5,
        width: '100%',
        height: 300,
        justifyContent: 'space-around',
        boxSizing: 'border-box',
        backgroundColor: '#8fbddf',
        padding: '2rem',
        zIndex: 2,
        ...props.style
      }}
    >
      {props.children}
    </Card>
  );
};

export default QuestionContainer;
