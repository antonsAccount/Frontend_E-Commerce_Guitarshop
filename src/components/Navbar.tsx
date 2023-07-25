import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-no-background.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./stylesheets/Navbar.css";

type NavbarProps = {
  token?: String;
};

export default function Navbar({ token }: NavbarProps): JSX.Element {
  const [extended, setExtended] = useState(false);
  const navigate = useNavigate();
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCartIcon
              sx={{ mr: 2, cursor: "pointer" }}
              onClick={() => {
                navigate("/cart");
              }}
            />
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
                <NavLink
                  to="/cart"
                  onClick={() => {
                    setExtended(false);
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemText primary="Shopping Cart" />
                  </Box>
                </NavLink>
              </ListItem>

              {token ? (
                <ListItem>
                  <NavLink
                    to="/shop"
                    onClick={() => {
                      alert("logout logic here");
                    }}
                  >
                    <ListItemText primary="Logout" />
                  </NavLink>
                </ListItem>
              ) : (
                <div>
                  <ListItem>
                    <NavLink
                      to="/login"
                      onClick={() => {
                        setExtended(false);
                      }}
                    >
                      <ListItemText primary="Login" />
                    </NavLink>
                  </ListItem>

                  <ListItem>
                    <NavLink
                      to="/signup"
                      onClick={() => {
                        setExtended(false);
                      }}
                    >
                      <ListItemText primary="Signup" />
                    </NavLink>
                  </ListItem>
                </div>
              )}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
