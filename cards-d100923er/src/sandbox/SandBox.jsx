import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../routes/components/NavItem";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="counter" label="Counter page" sx={{ color: "black" }} />
          <NavItem to="lifecycle" label="Life cycle" sx={{ color: "black" }} />
          <NavItem
            to="countries"
            label="Countries list"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
