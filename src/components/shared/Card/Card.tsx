import { FC, ReactNode } from 'react';

import { Card as MUICard, SxProps, Theme } from '@mui/material';

interface CardProps {
  children: ReactNode;
  style?: SxProps<Theme>;
  className?: string;
  onClick?: () => void;
}

const Card: FC<CardProps> = (props) => {
  return (
    <MUICard
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        width: 200,
        height: 150,
        ...props.style,
        backgroundColor: 'palevioletred',
        color: 'white'
      }}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </MUICard>
  );
};

export default Card;
