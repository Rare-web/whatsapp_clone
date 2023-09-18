import React from "react";
import { Dialog, Typography, Box, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "none",
};
// const component = styled(Box)`
//   display: flex;
// `;
// const container = styled(Box)`
//   padding: 56px 0 56px 56px;
// `;
// const qrCode = styled("img")({
//   height: "264px",
//   width: "264px",
//   margin: "50px 0 0 50px",
// });
const Title = styled(Typography)`
  font-size: 26px;
  font-weight: 300;
  color: #525252;
  font-family: inherit;
  margin-bottom: 25px;
`;
function LoginDialog() {
  const LoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
  };
  const LoginError = (res) => {
    console.log("error", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Box style={{ display: "flex" }}>
        <Box style={{ padding: "56px 0 56px 56px" }}>
          <Title>Use WhatsApp on your computer</Title>
          <List
            style={{
              padding: "0px",
              marginTop: "15px",
              fontSize: "18px",
              lineHeight: "28px",
              color: "#4a4a4a",
            }}>
            <ListItem>1. Open WhatsApp on your phone </ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>3. Tap on Link a device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the QR code
            </ListItem>
          </List>
        </Box>
        <Box style={{ position: "relative" }}>
          <img
            src={qrCodeImage}
            style={{ height: "264px", width: "264px", margin: "50px 0 0 50px" }}
            alt="QR code"
          />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translatex(25%)",
            }}>
            <GoogleLogin onSuccess={LoginSuccess} onError={LoginError} />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default LoginDialog;
