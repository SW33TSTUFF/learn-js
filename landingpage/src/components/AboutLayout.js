import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    '&.active': {
        color: '#fff',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: '0 10px',
    padding: '10px 20px',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&.active': {
        color: '#fff'
    }
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: '20px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    marginTop: '80px', // Add margin to avoid clipping
}));

const NavContainer = styled('nav')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
}));

const AboutLayout = () => {
    return (
        <StyledContainer>
            <Typography variant="h2" gutterBottom>About Us</Typography>
            <NavContainer>
                <StyledNavLink to="history">
                    <StyledButton variant="contained">History</StyledButton>
                </StyledNavLink>
                <StyledNavLink to="team">
                    <StyledButton variant="contained">Team</StyledButton>
                </StyledNavLink>
                <StyledNavLink to="values">
                    <StyledButton variant="contained">Values</StyledButton>
                </StyledNavLink>
            </NavContainer>
            <Outlet />
        </StyledContainer>
    );
};

export default AboutLayout;
