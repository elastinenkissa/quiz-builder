import { FC, ReactNode } from 'react';

import classes from './ClickableIcon.module.css';

interface ClickableIconProps {
  icon: ReactNode;
  onClick: () => void;
  onHoverOver?: () => void;
  onHoverOut?: () => void
  submit?: boolean;
}

const ClickableIcon: FC<ClickableIconProps> = (props) => {
  return (
    <button
      type={props.submit ? 'submit' : 'button'}
      className={classes.icon}
      onClick={props.onClick}
      onMouseEnter={props.onHoverOver}
      onMouseLeave={props.onHoverOut}
    >
      {props.icon}
    </button>
  );
};

export default ClickableIcon;
