import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Team from './Team'; // Import the Team component

const About = () => {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom>About Us</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/abdulla.jpeg"
                            alt="About Us"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our History</Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nibh semper, in pretium lorem volutpat. Nullam bibendum nisi sit amet magna eleifend, nec tempus dui tincidunt.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Mission</Typography>
                            <Typography variant="body1">
                                Sed ultricies urna eget orci efficitur, non lobortis odio blandit. Sed non efficitur arcu. Nulla vestibulum ultricies velit, sed molestie leo efficitur at.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Team</Typography>
                            <Typography variant="body1">
                                Meet our team members:
                            </Typography>
                            <Team />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Values</Typography>
                            <Typography variant="body1">
                                Proin vel odio bibendum, faucibus turpis eu, fermentum urna. Aenean et fermentum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec rhoncus, turpis eu ullamcorper elementum, dui libero pharetra est, id laoreet tellus mi eget nisi.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
