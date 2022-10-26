import React from "react";
import { Paper, Box, Typography } from "@mui/material";

function PaperExample() {
  return (
    <>
      <Typography variant="body2">Paper examples</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={1} />
        <Paper sx={{ backgroundColor: (theme) => "success.main" }} />
        <Paper elevation={3} />
      </Box>
    </>
  );
}

export default PaperExample;
