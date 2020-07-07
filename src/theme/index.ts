import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryLightColor: string;
  secondaryLightColor: string;
  primaryDarkColor: string;
  secondaryDarkColor: string;
  messageBackgroundColor: string;
  headerbgColor: string;
  headerSecondaryBgColor: string;
  chatBGColor: string;
}

export const darkTheme = {
  primaryLightColor: "#e9e9eb",
  secondaryLightColor: "#777",
  primaryDarkColor: "#1e5266",
  secondaryDarkColor: "#111",
  chatBGColor: "#111",
  messageBackgroundColor: "#3d3c3c",
  headerbgColor: "#777",
  headerSecondaryBgColor: "#ddd",
};

export const lightTheme = {
  primaryLightColor: "#ff055a",
  secondaryLightColor: "#fff",
  primaryDarkColor: "#ff055a",
  secondaryDarkColor: "#fff",
  chatBGColor: "#F5F5F5",
  messageBackgroundColor: "#fff",
  headerbgColor: "#fff",
  headerSecondaryBgColor: "#ddd",
};

export default styled;
export { css, keyframes, ThemeProvider };
