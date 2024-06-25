import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/#" },
  { id: 2, name: "CARS", link: "/#cars" },
  { id: 3, name: "ABOUT", link: "/#about" },
  { id: 4, name: "BOOKING", link: "/#booking" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AppBar position="static" color={theme === "dark" ? "default" : "primary"}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: 'serif', fontWeight: 'bold' }}
          >
            Freengo
          </Typography>
          <div className="d-none d-md-flex align-items-center space-x-4">
            {Navlinks.map(({ id, name, link }) => (
              <Button
                key={id}
                href={link}
                color="inherit"
                variant="text"
                sx={{ mx: 1, textTransform: 'none' }}
              >
                {name}
              </Button>
            ))}
          </div>
          <IconButton
            color="inherit"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="menu"
            className="d-md-none"
            onClick={toggleMenu}
          >
            {showMenu ? <HiMenuAlt1 /> : <HiMenuAlt3 />}
          </IconButton>
        </Toolbar>
      </Container>
      <ResponsiveMenu showMenu={showMenu} />
    </AppBar>
  );
};

export default Navbar;
