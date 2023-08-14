import { FC, ChangeEventHandler, forwardRef, ForwardedRef, ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as CrossIcon } from '@assets/icons/cross.svg';
import styles from './fieldText.module.scss';

const cx = classNames.bind(styles);

interface FieldTextProps {
  value?: string;
  className?: string;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>; // (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  touched?: boolean;
  title?: string;
  label?: string;
  helpText?: string;
  defaultWidth: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  clearable?: boolean;
  isRequired?: boolean;
  hasDoubleMessage?: boolean;
  type?: string;
}

export const FieldText: FC<FieldTextProps> = forwardRef(
  (
    {
      value,
      className,
      error,
      placeholder,
      maxLength = 256,
      disabled = false,
      onChange,
      onFocus,
      onBlur,
      onKeyUp,
      onKeyDown,
      touched = false,
      title,
      label,
      helpText,
      defaultWidth = true,
      startIcon,
      endIcon,
      clearable = false,
      isRequired = false,
      hasDoubleMessage = false,
      type = 'text',
    },
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement => {
    const clearInput = () => {
      if (onChange) {
        // TODO: fix
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange('');
      }
    };

    const helpTextElement = <span className={cx('help-text')}>{helpText}</span>;

    return (
      <>
        {label && (
          <span className={cx('label', { disabled })}>
            {label}
            {isRequired && <span className={cx('asterisk')}>*</span>}
          </span>
        )}
        <div
          className={cx('field', className, {
            error,
            touched,
            disabled,
            'default-width': defaultWidth,
          })}
          title={title}
        >
          {startIcon && (
            <span className={cx('icon-container-start')}>
              <i className={cx('icon')}>{startIcon}</i>
            </span>
          )}
          <span className={cx('input-container')}>
            <input
              ref={ref}
              type={type}
              className={cx('input')}
              value={value}
              maxLength={maxLength}
              disabled={disabled}
              onChange={disabled ? null : onChange}
              onFocus={disabled ? null : onFocus}
              onBlur={disabled ? null : onBlur}
              onKeyUp={disabled ? null : onKeyUp}
              onKeyDown={disabled ? null : onKeyDown}
            />
            {placeholder && !value && (
              <span className={cx('placeholder')}>
                {placeholder}
                {isRequired && !label && <span className={cx('asterisk')} />}
              </span>
            )}
          </span>
          {endIcon && (
            <span className={cx('icon-container-end')}>
              <i className={cx('icon')}>{endIcon}</i>
            </span>
          )}
          {clearable && (
            <span className={cx('icon-container-end')}>
              <i className={cx('clear-icon', { disabled })} onClick={disabled ? null : clearInput}>
                <CrossIcon />
              </i>
            </span>
          )}
        </div>
        {((error && touched) || helpText) && (
          <div className={cx('additional-content', { disabled })}>
            {error && touched ? (
              <>
                <span className={cx('error-text')}>{error}</span>
                {hasDoubleMessage && helpTextElement}
              </>
            ) : (
              helpText && helpTextElement
            )}
          </div>
        )}
      </>
    );
  },
);
