import React from "react";
import Logo from "./image/logo.png";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <Box
        m={3}
        //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          className="newInvoiceButton"
          variant="contained"
          sx={{ backgroundColor: "#ff6633", height: 40 }}
        >
          New Invoice
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
