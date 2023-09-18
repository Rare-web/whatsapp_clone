import React from "react";
import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";

function Messenger() {
  const Header = styled(AppBar)`
    height: 220px;
    background-color: #00a884;
    box-shadow: none;
  `;
  // const comp = styled(Box)`
  //   height: 100vh;
  //   background-color: #0c1317;
  // `;
  return (
    <Box style={{ height: "100vh", backgroundColor: "#0c1317" }}>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Box>
  );
}

export default Messenger;
