import React from "react";
import Logo from "./image/Imagine.png";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo-home" />
      <Box
        m={3}
        //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <NavLink style={{ textDecoration: "none" }} to="/newinvoice">
          <Button
            className="newInvoiceButton"
            variant="contained"
            sx={{ backgroundColor: "#ff6633", height: 40 }}
          >
            New Invoice
          </Button>
        </NavLink>
      </Box>
    </div>
  );
};

export default Navbar;
