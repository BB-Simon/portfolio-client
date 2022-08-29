import { DefaultTheme } from "styled-components"

const lightTheme: DefaultTheme = {
    themeType: 'light',
    bg: '#ffffff',
    txt: '#292929',

}

const darkTheme: DefaultTheme = {
    themeType: 'dark',
    bg: '#292929',
    txt: '#ffffff',
}
export const theme = {
    light: lightTheme,
    dark: darkTheme,
}

