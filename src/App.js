import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import ThemeExample from "./components/Theme";
import PaperExample from "./components/Paper";
import RateExample from "./components/Rate";
import BoxExample from "./components/BoxExample";
import CardExample from "./components/CardExample";

function App() {
  const theme = createTheme({
    spacing: 8,
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

        <PaperExample />
        <RateExample />
        <BoxExample />
        <CardExample />
      </ThemeProvider>
      <CardExample />
    </div>
  );
}

export default App;
