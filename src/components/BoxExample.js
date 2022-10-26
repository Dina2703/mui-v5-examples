import { Box, Typography } from "@mui/material";
import React from "react";

//Box replaces standard div or span depending what you need it.
function BoxExample() {
  return (
    <div>
      <Typography variant="h6">Box Example</Typography>
      <Box sx={{ bgcolor: "success.main", mx: 14, my: 10 }}>It's a MUI Box</Box>
    </div>
  );
}

export default BoxExample;
