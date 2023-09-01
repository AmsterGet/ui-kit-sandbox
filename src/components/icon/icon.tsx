import { FC, MouseEventHandler, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { icons } from './icons';
import styles from './icon.module.scss';

const cx = classNames.bind(styles);

type IconName = keyof typeof icons;

interface IconProps {
  icon: IconName;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=136-2&mode=design&t=Ri0jf5ugCvGn3z3b-0
// TODO: add a generic svg element with basic props (height, width, viewBox, fillRule)
export const Icon: FC<IconProps> = ({
  icon,
  className,
  disabled = false,
  onClick,
}): ReactElement => {
  const SelectedIcon = icons[icon];

  return (
    <span className={cx('icon', className, { disabled })} onClick={disabled ? undefined : onClick}>
      <SelectedIcon />
    </span>
  );
};
