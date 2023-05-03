import { FC, ReactNode } from 'react';

import classes from './ClickableIcon.module.css';

interface ClickableIconProps {
  icon: ReactNode;
  onClick: () => void;
}

const ClickableIcon: FC<ClickableIconProps> = (props) => {
  return (
    <button className={classes.icon} onClick={props.onClick}>
      {props.icon}
    </button>
  );
};

export default ClickableIcon;
