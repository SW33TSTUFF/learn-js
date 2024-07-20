import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ customTheme }) => ({
    backgroundColor: customTheme === 'light'
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(34, 40, 49, 1)',
    color: customTheme === 'light' ? '#000' : '#fff',
    boxShadow: 'none',
    transition: 'background-color 0.3s ease',
}));

const StyledButton = styled(Button)(({ customTheme }) => ({
    color: customTheme === 'light' ? '#000' : '#ddd',
    fontSize: '1rem',
    fontFamily: 'Roboto, sans-serif',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: customTheme === 'light' ? 'rgba(118, 171, 174, 0.2)' : 'rgba(107, 114, 142, 0.2)',
    },
}));

const LogoLink = styled(NavLink)(({ customTheme }) => ({
    marginRight: 'auto',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
}));

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');
    const logoSrc = theme === 'light' ? '/imageXB.png' : '/whiteX.png';

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <List>
            <ListItem button component={NavLink} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="/about" onClick={handleDrawerToggle}>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={NavLink} to="/contact" onClick={handleDrawerToggle}>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    );

    return (
        <StyledAppBar position="static" customTheme={theme}>
            <Toolbar>
                <LogoLink to="/" customTheme={theme}>
                    <img src={logoSrc} alt="Logo" style={{ height: '60px', width: 'auto', maxWidth: '100%' }} />
                </LogoLink>
                {isMobile ? (
                    <div>
                        <IconButton color="inherit" onClick={toggleTheme}>
                            {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                ) : (
                    <>
                        <StyledButton customTheme={theme} component={NavLink} to="/" exact>
                            Home
                        </StyledButton>
                        <StyledButton customTheme={theme} component={NavLink} to="/about" exact>
                            About
                        </StyledButton>
                        <StyledButton customTheme={theme} component={NavLink} to="/contact" exact>
                            Contact
                        </StyledButton>
                        <IconButton color="inherit" onClick={toggleTheme}>
                            {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </>
                )}
            </Toolbar>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </StyledAppBar>
    );
};

export default NavBar;
