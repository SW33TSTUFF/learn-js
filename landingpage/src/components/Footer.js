import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledFooter = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    // position: 'fixed', 
    bottom: 0,
    left: 0,
}));

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2024 X Gen Studios. All rights reserved.</p>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                            About
                        </Link>
                    </li>
                    <li style={{ display: 'inline' }}>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </StyledFooter>
    );
};

export default Footer;
