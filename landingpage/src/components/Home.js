import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome!');
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();

    // Update welcome message based on the time of day and name
    useEffect(() => {
        const hours = new Date().getHours();
        const timeMessage = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
        setWelcomeMessage(`${timeMessage}${name ? `, ${name}` : ''}!`);
    }, [name]);

    // Update current time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleContactUsClick = () => {
        navigate('/contact');
    };

    const backgroundImage = theme === 'light' ? '/image6.jpg' : '/image12.jpg';
    const logoImage = theme === 'light' ? '/imageXB.png' : '/whiteX.png';

    return (
        <div style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: theme === 'light' ? '#000' : '#fff',
        }}>
            <Container style={{ textAlign: 'center' }}>
                <img src={logoImage} alt="Logo" style={{ maxWidth: '300px' }} />
                <Typography variant="h3" align="center" style={{ fontWeight: 'normal', fontFamily: 'Cabin', fontSize: '5rem', lineHeight: '1.2' }}>{welcomeMessage}</Typography>
                <Typography variant="subtitle1" align="center" style={{ marginBottom: '40px', fontSize: '1.5rem', lineHeight: '1.5' }}>
                    {name ? `${name}, w` : 'W'}elcome to X GEN Studios, where we create immersive and innovative gaming experiences!
                </Typography>
                <TextField
                    label="Enter your name"
                    variant="outlined"
                    value={name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    style={{ backgroundColor: '#fff', marginBottom: '20px' }}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleContactUsClick}>
                    Contact Us
                </Button>
                <Typography variant="subtitle1" align="center" style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Chakra Petch', fontSize: '2rem', lineHeight: '1.2' }}>{currentTime.toLocaleTimeString()}</Typography>
            </Container>
        </div>
    );
};

export default Home;
