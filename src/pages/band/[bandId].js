import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Container, Card, CardMedia, Grid, Paper, Typography } from '@mui/material';
import Layout from '../../components/layout';

const GET_BAND = gql`
  query GetBand($id: ID!) {
    band(id: $id) {
      id
      name
      description
      genre
      year
    }
  }
`;

const LandingPage = ({bandId}) => {
  const { loading, error, data } = useQuery(GET_BAND, {
    variables: { id: bandId },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const band = data.band;

  return (
    <Layout>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={band.imageUrl}
              alt={band.name}
            />
            <Typography variant="h2">{band.name}</Typography>
            <Typography variant="body1">{band.description}</Typography>
          </Card>
        </Box>
      </Container>
    </Layout>
  );
};

export default LandingPage;
