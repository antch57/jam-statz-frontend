import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Container, Card, CardMedia, Typography } from '@mui/material';
import Layout from '../../components/layout';

const GET_SHOW = gql`
  query GetShow($id: ID!) {
    performance(id: $id) {
        id
        performanceDate
        band {
            id
            name
        }
        venue {
            id
            name
            location
        }
      }
}`;

const ShowPage = ({showId}) => {
  const { loading, error, data } = useQuery(GET_SHOW, {
    variables: { id: showId },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const performance = data.performance;

  return (
    <Layout>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={performance.imageUrl}
              alt={performance.band.name}
            />
            <Typography variant="h2">{performance.band.name}</Typography>
            <Typography variant="body1">{new Date(performance.performanceDate).toLocaleDateString()}</Typography>
            <Typography variant="body1">{performance.venue.name}</Typography>
            <Typography variant="body1">{performance.venue.location}</Typography>
          </Card>
        </Box>
      </Container>
    </Layout>
  );
};

export default ShowPage;
