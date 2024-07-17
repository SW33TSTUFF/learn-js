import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledAppBar = styled(AppBar)(({ customTheme }) => ({
    backgroundColor: customTheme === 'light'
        ? 'rgba(255, 255, 255, 0.8)'
        : 'rgba(34, 40, 49, 0.8)', // Light or dark background with reduced opacity
    color: customTheme === 'light' ? '#000' : '#fff',
    boxShadow: 'none',
    transition: 'background-color 0.3s ease',
    backdropFilter: 'blur(10px)', // Blur effect for better look
}));

const StyledButton = styled(Button)(({ customTheme }) => ({
    color: customTheme === 'light' ? '#000' : '#ddd',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    padding: '10px 20px',
    '&:hover': {
        backgroundColor: customTheme === 'light' ? 'rgba(118, 171, 174, 0.2)' : 'rgba(107, 114, 142, 0.2)',
    },
}));

const StyledLink = styled(NavLink)(({ customTheme }) => ({
    color: customTheme === 'light' ? '#000' : '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontFamily: 'Poppins, sans-serif',
    borderBottom: `3px solid ${customTheme === 'light' ? '#76ABAE' : '#fff'}`,
    marginRight: 'auto',
    '&:hover': {
        borderBottomColor: customTheme === 'light' ? '#4c8184' : '#ddd', // Slightly change the border color on hover
    },
}));

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <StyledAppBar position="static" customTheme={theme}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <StyledLink to="/" customTheme={theme}>
                        Simaak
                    </StyledLink>
                </Typography>
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
            </Toolbar>
        </StyledAppBar>
    );
};

export default NavBar;
