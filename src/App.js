import { Button, Typography } from "@mui/material";
import "./App.css";
import { styled } from "@mui/material/styles";

function App() {
  //make a custom component with 'styled' func, by passing the MUI component you need to customize.
  const MyCustomButton2 = styled(Button)({
    boxShadow: 2,
  });
  const MyCustomButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

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
      <MyCustomButton variant="contained" color="secondary">
        Custom Button with MUI/styled (with theme)
      </MyCustomButton>
      <MyCustomButton2 variant="contained" color="secondary">
        Custom Button with MUI/styled
      </MyCustomButton2>
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
