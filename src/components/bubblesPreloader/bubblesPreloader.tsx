import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './bubblesPreloader.module.scss';

const cx = classNames.bind(styles);

const BUBBLES_COUNT = 7;

interface BubblesPreloaderProps {
  color?: string;
  className?: string;
}

export const BubblesPreloader: FC<BubblesPreloaderProps> = ({
  color = 'topaz',
  className,
}): ReactElement => (
  <div className={cx('bubbles-preloader', className, { [`color-${color}`]: color })}>
    {Array(BUBBLES_COUNT)
      .fill(undefined)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={cx('bubble')} key={index} />
      ))}
  </div>
);
