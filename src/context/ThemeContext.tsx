import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface IThemeProvider {
  currentTheme: DefaultTheme;
  setNewTheme: (args: DefaultTheme) => void
}

export const CustomThemeReducer = (state: any, updatedTheme: DefaultTheme) => {
  return { ...state, updatedTheme };
}

export const CustomThemeContext = createContext<IThemeProvider>({} as IThemeProvider);


