import React from "react"
import {useQuery, gql} from '@apollo/client';
import { Typography, Button, Container, Card, CardContent, CardActions, Grid, CardMedia, Box } from '@mui/material';
import { Link } from "gatsby"

const GET_BANDS = gql`
  query GetBands {
    bands {
      id
      name
      year
      genre
      description
    }
  }
`;

const BandCards = () => {
    const { loading, error, data } = useQuery(GET_BANDS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const bands = data.bands;

   return (
    <Box>
        <Container sx={{ pt: 8, pb: 8 }} maxWidth="md">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Featured Bands
            </Typography>
            <Grid container spacing={4}>
                {bands.map((band) => (
                    <Grid item key={band.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={band.image ? band.image : 'https://source.unsplash.com/random'}
                                alt={band.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {band.name}
                            </Typography>
                            <Typography>
                                Genre: {band.genre}
                            </Typography>
                            <Typography>
                                Description: {band.description}
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" color="primary" component={Link} to={`/band/${band.id}`}>
                                View
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
)};

export default BandCards;

