import { FC, ReactNode, ReactElement } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
    children: ReactNode;
}

export const Checkbox: FC<CheckboxProps> = ({ children }): ReactElement => {
    return <button className={styles.checkbox}>{children}</button>;
}
