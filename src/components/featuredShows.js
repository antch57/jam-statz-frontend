import React from "react"
import {useQuery, gql} from '@apollo/client';
import { Typography, Button, Container, Card, CardContent, CardActions, Grid, CardMedia, Box } from '@mui/material';
import { Link } from "gatsby"

const GET_SHOWS = gql`
  query GetShows {
    performances {
      id
      performanceDate
      venue {
        id
        name
        location
      }
      band {
        id
        name
        genre
        description
      }
    }
  }
`;

const ShowCards = () => {
    const { loading, error, data } = useQuery(GET_SHOWS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const performances = data.performances;

   return (
    <Box>
        <Container sx={{ pt: 8, pb: 8 }} maxWidth="md">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Featured Performances
            </Typography>
            <Grid container spacing={4}>
                {performances.map((show) => (
                    <Grid item key={show.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={show.image ? show.image : 'https://source.unsplash.com/random'}
                                alt={show.band.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {show.band.name}
                            </Typography>
                            <Typography>
                                Genre: {show.band.genre}
                            </Typography>
                            <Typography>
                                Description: {show.band.description}
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" color="primary" component={Link} to={`/show/${show.id}`}>
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

export default ShowCards;

