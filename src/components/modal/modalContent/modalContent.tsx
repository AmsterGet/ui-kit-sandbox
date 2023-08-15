import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import styles from './modalContent.module.scss';

const cx = classNames.bind(styles);

interface ModalContentProps {
  children?: ReactNode;
}

export const ModalContent: FC<ModalContentProps> = ({ children }) => (
  <div className={cx('modal-content')}>{children}</div>
);
