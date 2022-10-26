import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import ThemeExample from "./components/Theme";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: "dark",
      primary: {
        main: "#CCC",
      },
      secondary: {
        main: orange[500],
      },
      myCustomColor: {
        main: red[400],
        superDark: red[800],
        superLight: red[100],
      },
    },
    typography: {
      myVariant: {
        fontSize: "6rem",
        color: orange[800],
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeExample />
      </ThemeProvider>
    </div>
  );
}

export default App;
