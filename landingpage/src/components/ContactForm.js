import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required';
        tempErrors.email = /$^|.+@.+..+/.test(formData.email) ? '' : 'Email is not valid';
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
        <Container>
            <Typography variant="h2">Contact Us</Typography>
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
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
            {success && <Typography variant="body1" color="success">{success}</Typography>}
        </Container>
    );
};

export default ContactForm;
