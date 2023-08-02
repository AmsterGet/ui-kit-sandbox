import { ReactElement } from 'react';

type ThemeKey = 'light' | 'dark' | string;

interface ITheme {
    [themeKey: ThemeKey]: string;
}

interface IThemeProviderProps {
    children?: ReactElement;
    theme?: ThemeKey;
    customThemes?: ITheme;
}

const builtinThemes: ITheme = {
    light: 'rp-ui-kit-theme-light',
    dark: 'rp-ui-kit-theme-dark',
};

export const ThemeProvider = ({
  children,
  theme = 'light',
  customThemes = {},
}: IThemeProviderProps) => {
    const themes = {
        ...builtinThemes,
        ...customThemes,
    };

    const currentThemeClassName = themes[theme] || builtinThemes.light;

    return (
        <div className={currentThemeClassName}>
            {children}
        </div>
    );
};
