import { Button, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Button variant="contained" color="info" sx={{ p: 2 }}>
        Click Me
      </Button>
      <Button variant="contained" color="primary">
        Custom theme color
      </Button>
      <Button variant="contained" color="secondary">
        Custom theme color 2
      </Button>
      <Typography variant="subtitle2" color="initial">
        Typography
      </Typography>
      <Typography variant="myVariant">Custom theme Typography</Typography>
      <Typography sx={{ color: "myCustomColor.superDark" }}>
        Custom theme Typography via SX
      </Typography>
    </div>
  );
}

export default App;
