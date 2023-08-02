import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
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
import LogoutDialog from "./LogoutDialog";

type NavbarProps = {
  token: String;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ token, setToken }: NavbarProps): JSX.Element {
  const [extended, setExtended] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // const { token } = useContext(AuthContext);
  // if (token) {
  //   console.log(token);
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LogoutDialog open={open} setOpen={setOpen} setToken={setToken} />
      <AppBar position="static" id="navbar-div">
        <Toolbar>
          <Box sx={{ width: "20%" }}></Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Link to="/">
              <img id="navbar-logo" src={Logo} alt="logo" />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
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
                  className="navbar-item"
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
                  className="navbar-item"
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
                  className="navbar-item"
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
                <ListItem
                  className="navbar-item"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <ListItemText primary="Logout" />
                </ListItem>
              ) : (
                <div>
                  <ListItem>
                    <NavLink
                      className="navbar-item"
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
                      className="navbar-item"
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
