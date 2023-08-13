import { FC, ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './systemMessage.module.scss';

const cx = classNames.bind(styles);

type Mode = 'info' | 'warning' | 'error';

interface SystemMessageProps {
  children?: ReactNode;
  mode?: Mode;
  header?: string;
  caption?: ReactNode;
  widthByContent: boolean;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=5817-43219&mode=design&t=GAXsAg9jOEgkVVlq-0
export const SystemMessage: FC<SystemMessageProps> = ({
  header,
  caption,
  children,
  mode = 'info',
  widthByContent = false,
}): ReactElement => {
  return (
    <div className={cx('system-message', { 'content-width': widthByContent })}>
      <div className={cx(`stripes-${mode}`)} />
      <div className={cx('text-container')}>
        {header && <h1 className={cx(`message-header-${mode}`)}>{header}</h1>}
        <div className={cx('children')}>{children}</div>
        {caption && <p>{caption}</p>}
      </div>
    </div>
  );
};
