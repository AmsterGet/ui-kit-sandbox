import classNames from 'classnames/bind';
import { FC, ReactElement, ReactNode, useRef } from 'react';
import { KeyCodes } from '../../constants/key-codes'; // TODO: fix linter aliases according to vite config
import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

type ThemeVariant = 'light' | 'dark'; // TODO: remove as it will be controlled using active theme

interface CheckboxProps {
  value: boolean;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  dataAutomationId?: string;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;

  variant?: ThemeVariant;

  form?: string; // TODO: check if needed
}

export const Checkbox: FC<CheckboxProps> = ({
  children,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  className,
  value,
  variant = 'light',
  dataAutomationId,
}): ReactElement => {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    const { keyCode } = event;

    if (keyCode === KeyCodes.SPACE_KEY_CODE) {
      event.preventDefault();
      return;
    }

    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      event.preventDefault();
      inputRef.current.click();
    }
  };

  return (
    <label
      id="chk1-label"
      className={cx(variant, className, {
        disabled,
      })}
      onFocus={onFocus}
      onBlur={onBlur}
      data-automation-id={dataAutomationId}
    >
      <input
        ref={inputRef}
        tabIndex="0"
        type="checkbox"
        onKeyDown={handleKeyDown}
        className={cx('input')}
        disabled={disabled}
        onChange={onChange}
        checked={value}
      />
      <span
        aria-labelledby="chk1-label"
        role="checkbox"
        aria-checked={value}
        className={cx('checkbox', {
          disabled,
        })}
      />
      {children && <span className={cx('children-container', { disabled })}>{children}</span>}
    </label>
  );
};
