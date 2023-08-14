import {
  FC,
  ReactNode,
  ReactElement,
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  MouseEventHandler,
} from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type IconPlace = 'start' | 'end';
type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'text';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  iconPlace?: IconPlace;
  dataAutomationId?: string;
  wide?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  className?: string;
  variant?: ButtonVariant;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=2350-8762&mode=design&t=GAXsAg9jOEgkVVlq-0
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
      onClick,
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
            {buttonIcon}
          </i>
        )}
        {children}
      </button>
    );
  },
);
