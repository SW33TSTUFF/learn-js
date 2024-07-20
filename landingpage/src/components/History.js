import React, { useContext } from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';

const TranslucentContainer = styled(Container)(({ theme }) => ({
    marginTop: '60px',
    paddingTop: '100px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(34, 40, 49, 0.7)',
    padding: '20px',
    borderRadius: '8px',
}));

const AboutHistory = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <TranslucentContainer theme={theme}>
            <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Chakra Petch', fontSize: '3rem', lineHeight: '1.2' }}>HISTORY</Typography>
            <img src="/team.jpg" alt="About History Image" style={{ width: '50%', marginTop: '20px' }} />
            <Typography variant="body1" style={{ marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Cabin', fontSize: '20px', lineHeight: '1.7' }}>
                XGen Studios is an independently owned and operated game developer of several award-winning titles on consoles, mobile, and the web. Established in 2001 and located in Edmonton Canada, we're a team of passionate creative people, united by a desire to create the type of games we wish existed. We're excited by emerging technologies and the new experiences these make possible.

                Since 2001, XGen Studios has released 14 internally-developed titles for consoles, mobiles, and the web, including the #1-selling hit Defend Your Castle for Nintendo’s WiiWare™ Service and Day-1 PS4™ title Super Motherload.

            </Typography>
        </TranslucentContainer>

    );
};

export default AboutHistory;
