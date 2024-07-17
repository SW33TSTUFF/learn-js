import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Team = () => (
    <div style={{ padding: '20px' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Simaak Niyaz</Typography>
                        <Typography variant="body2">Position: Developer</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Ishan Lakshitha</Typography>
                        <Typography variant="body2">Position: Designer</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Theekshana Dissanayake</Typography>
                        <Typography variant="body2">Position: Manager</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Thisarani Dias</Typography>
                        <Typography variant="body2">Position: Marketing</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Team;
