import { FC, ReactNode, ReactElement, forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type IconPlace = 'start' | 'end';
// dark variants and others should be controlled by theme
type ButtonVariant = 'topaz' | 'ghost' | 'danger' | 'text' | 'dark-topaz' | 'dark-ghost' | 'dark-text';

interface ButtonProps {
    children: ReactNode;
    icon: string;
    iconPlace: IconPlace;
    dataAutomationId: string;
    wide: boolean;
    disabled: boolean;
    type: 'submit' | 'reset' | 'button' | undefined ; // TODO: Change to button type
    onClick: () => void; // TODO: Change to button on click
    form: string | undefined;
    title: string;
    className: string,
    variant: ButtonVariant,
}

export const Button: FC<ButtonProps> = forwardRef(({
   variant = 'topaz',
   icon,
   iconPlace = 'start',
   wide = false,
   type = 'button',
   children,
   disabled= false,
   onClick = () => {},
   form,
   title,
   className,
   dataAutomationId,
}, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
    const classes = cx('button', variant, className, {
        disabled,
        wide,
    });

    const buttonIcon = (variant === 'text' || variant === 'dark-text') && icon;

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
        >
            {buttonIcon && (
                <i className={cx('icon', {
                    [`icon-${iconPlace}`]: iconPlace,
                })}>
                    {Parser(buttonIcon)}
                </i>
            )}
            {children}
        </button>
    );
});
