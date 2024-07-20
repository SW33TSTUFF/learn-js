import React, { useContext } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';

const TranslucentContainer = styled(Container)(({ theme }) => ({
    marginTop: '60px',
    paddingTop: '100px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(34, 40, 49, 0.7)',
    padding: '20px',
    borderRadius: '8px',
}));

const ValueCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const AboutValues = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <TranslucentContainer theme={theme}>
            <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'normal', fontFamily: 'Chakra Petch', fontSize: '3rem', lineHeight: '1.2' }}>VALUES</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <ValueCard>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Creativity
                            </Typography>
                            <Typography variant="body1">
                                We foster creativity in every aspect of our work, pushing boundaries to deliver innovative experiences.
                            </Typography>
                        </CardContent>

                    </ValueCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ValueCard>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Integrity
                            </Typography>
                            <Typography variant="body1">
                                Integrity is at the heart of everything we do, ensuring honesty and transparency in our relationships.
                            </Typography>
                        </CardContent>

                    </ValueCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ValueCard>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Excellence
                            </Typography>
                            <Typography variant="body1">
                                We strive for excellence in craftsmanship, delivering high-quality products that exceed expectations.
                            </Typography>
                        </CardContent>

                    </ValueCard>
                </Grid>
            </Grid>
        </TranslucentContainer>
    );
};

export default AboutValues;
