import "styled-components";

// interface Theme {
//   bg: string
//   txt: string
// }

declare module "styled-components" {
  export interface DefaultTheme {
    themeType: string;
    bg: string
    txt: string
  }
}