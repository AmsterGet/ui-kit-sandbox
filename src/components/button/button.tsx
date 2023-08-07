import { FC, ReactNode, ReactElement, forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type IconPlace = 'start' | 'end';
type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'text';

interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  iconPlace?: IconPlace;
  dataAutomationId?: string;
  wide?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void; // TODO: Change to button on click
  form?: string;
  title?: string;
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = forwardRef(
  (
    {
      variant = 'primary',
      icon,
      iconPlace = 'start',
      wide = false,
      type = 'button',
      children,
      disabled = false,
      onClick = () => {},
      form,
      title,
      className,
      dataAutomationId,
      ...rest
    },
    ref: ForwardedRef<HTMLButtonElement>,
  ): ReactElement => {
    const classes = cx('button', variant, className, {
      disabled,
      wide,
    });

    const buttonIcon = variant === 'text' && icon;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick}
        form={form}
        title={title}
        data-automation-id={dataAutomationId}
        {...rest}
      >
        {buttonIcon && (
          <i
            className={cx('icon', {
              [`icon-${iconPlace}`]: iconPlace,
            })}
          >
            {Parser(buttonIcon)}
          </i>
        )}
        {children}
      </button>
    );
  },
);
