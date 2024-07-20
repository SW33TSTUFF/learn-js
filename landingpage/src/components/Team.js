import React, { useContext } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { styled } from '@mui/material/styles';

const TranslucentContainer = styled(Container)(({ theme }) => ({
    marginTop: '60px',
    paddingTop: '100px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(34, 40, 49, 0.7)',
    padding: '20px',
    borderRadius: '8px',
}));

const Team = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ padding: '20px' }}>
            <TranslucentContainer theme={theme}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                width="auto"
                                image="/1.png"
                                alt="Simaak Niyaz"
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Simaak Niyaz</Typography>
                                <Typography variant="body2">Position: Developer</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                width="auto"
                                image="/2.png"
                                alt="Ishan Lakshitha"
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Ishan Lakshitha</Typography>
                                <Typography variant="body2">Position: Designer</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                width="auto"
                                image="/3.png"
                                alt="Theekshana Dissanayake"
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Theekshana Dissanayake</Typography>
                                <Typography variant="body2">Position: Manager</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                width="auto"
                                image="/4.png"
                                alt="Thisarani Dias"
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Thisarani Dias</Typography>
                                <Typography variant="body2">Position: Marketing</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </TranslucentContainer>
        </div>
    );
};

export default Team;
