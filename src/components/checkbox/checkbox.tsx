import classNames from 'classnames/bind';
import { FC, ReactElement, ReactNode, useRef } from 'react';
import { KeyCodes } from '../../constants/key-codes'; // TODO: fix linter aliases according to vite config
import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

interface CheckboxProps {
  value: boolean;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  dataAutomationId?: string;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  form?: string;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=2350-8764&mode=design&t=GAXsAg9jOEgkVVlq-0
export const Checkbox: FC<CheckboxProps> = ({
  children,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  className,
  value,
  dataAutomationId,
  form,
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
      id="rp-ui-kit-checkbox-label"
      className={cx('checkbox', className, {
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
        form={form}
      />
      <span
        aria-labelledby="rp-ui-kit-checkbox-label"
        role="checkbox"
        aria-checked={value}
        className={cx('control', {
          disabled,
        })}
      />
      {children && <span className={cx('children', { disabled })}>{children}</span>}
    </label>
  );
};
