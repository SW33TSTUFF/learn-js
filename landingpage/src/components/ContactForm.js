import React, { useState, useContext, useEffect } from 'react';
import { Container, TextField, Button, Typography, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';

const TranslucentContainer = styled(Container)(({ theme }) => ({
    marginTop: '60px',
    paddingTop: '20px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(34, 40, 49, 0.7)', // Adjust the RGBA value for translucency
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
}));

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const { theme } = useContext(ThemeContext);
    const backgroundImage = theme === 'light' ? '/image6.jpg' : '/image12.jpg';

    useEffect(() => {
        let timer;
        if (success) {
            timer = setTimeout(() => {
                setSuccess('');
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [success]);

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required';
        tempErrors.email = /^$|.+@.+..+/.test(formData.email) ? '' : 'Email is not valid';
        tempErrors.message = formData.message ? '' : 'Message is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccess('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme === 'light' ? '#000' : '#fff',
                fontFamily: 'Cabin, sans-serif',
            }}>
            <TranslucentContainer theme={theme}>
                <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Chakra Petch', fontSize: '3rem', lineHeight: '1.2' }} align="center" marginBottom="20px">CONTACT</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        {success ? 'Submitted!' : 'Submit'}
                    </Button>
                </form>
                <Fade in={!!success}>
                    <Typography variant="body1" color="success" align="center" style={{ marginTop: '10px' }}>
                        {success}
                    </Typography>
                </Fade>
            </TranslucentContainer>
        </div>
    );
};

export default ContactForm;
