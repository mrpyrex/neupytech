import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#60d4ea",
      main: "#17a2b8",
      dark: "#007388",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffffff",
      main: "#f0f1f2",
      dark: "#bebebf",
      contrastText: "#000"
    }
  }
});
export default theme;
