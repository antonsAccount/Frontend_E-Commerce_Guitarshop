import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-no-background.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./stylesheets/Navbar.css";

export default function Navbar() {
  const [extended, setExtended] = useState(false);
  // const { token } = useContext(AuthContext);
  // if (token) {
  //   console.log(token);
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="navbar-div">
        <Toolbar>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img id="navbar-logo" src={Logo} alt="logo" />
          </Box>
          <Box /* sx={{ width: "20%" }} */>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setExtended(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            open={extended}
            onClose={() => setExtended(false)}
            anchor="right"
          >
            <List className="navbar-list">
              <ListItem>
                <NavLink
                  to="/"
                  onClick={() => {
                    setExtended(false);
                  }}
                >
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItem>

              <ListItem>
                <NavLink
                  to="/shop"
                  onClick={() => {
                    setExtended(false);
                  }}
                >
                  <ListItemText primary="Shop" />
                </NavLink>
              </ListItem>

              <ListItem>
                <ListItemText primary="About" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Contact" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Services" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
