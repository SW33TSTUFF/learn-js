import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome!');
    const [currentTime, setCurrentTime] = useState(new Date());

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

    const backgroundImage = theme === 'light' ? '/image6.jpg' : '/image13.jpg'; // Adjust image paths as needed

    return (
        <div style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: theme === 'light' ? '#000' : '#fff', // Adjust text color based on theme

        }}>
            <Container>
                <Typography variant="h1" align="center" style={{ marginBottom: '20px', fontWeight: 'normal', fontSize: '9rem', fontFamily: 'Cabin' }}>{welcomeMessage}</Typography>
                <Typography variant="h5" align="center" style={{ marginBottom: '40px' }}>I'm a Computer Science Undergraduate at UCSC</Typography>
                <TextField
                    label="Enter your name"
                    variant="outlined"
                    value={name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    style={{ backgroundColor: '#fff', marginBottom: '20px' }}
                />
                <Button variant="contained" color="primary" fullWidth>Get Started</Button>
                <Typography variant="h5" align="center" style={{ marginTop: '40px' }}>{currentTime.toLocaleTimeString()}</Typography>
            </Container>
        </div>
    );
};

export default Home;
