import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    '&.active': {
        color: '#fff',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: '0 10px',
    padding: '10px 40px',
    color: '#EEEEEE',
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Cabin, sans-serif',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&.active': {
        color: '#fff'
    }
}));

const NavContainer = styled('nav')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    fontFamily: 'Cabin, sans-serif',
}));

const AboutLayout = () => {
    const { theme } = useContext(ThemeContext);
    const backgroundImage = theme === 'light' ? '/image6.jpg' : '/image12.jpg';
    return (
        <div style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            color: theme === 'light' ? '#000' : '#fff',
            fontFamily: 'Cabin, sans-serif',
            textAlign: 'center',
            padding: '20px',
            paddingTop: '40px',
        }}>
            <div style={{
                width: '100%',
                textAlign: 'center',
            }}>
                <Typography variant="h3" style={{ marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Chakra Petch', fontSize: '5rem', lineHeight: '1.2' }}>ABOUT</Typography>
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
            </div>
            <Outlet />
        </div >
    );
};

export default AboutLayout;
