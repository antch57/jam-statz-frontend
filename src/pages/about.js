import React from "react";
import {useQuery, gql} from '@apollo/client';
import Layout from "../components/layout";
import { Card, CardContent, Typography } from '@mui/material';

const GET_BANDS = gql`
  query GetBands {
    bands {
      id
      name
      year
      genre
      description
    }
  }`;

const AboutPage = () => {
    const { loading, error, data } = useQuery(GET_BANDS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <Layout>
            <div style={{ margin: '3rem auto', maxWidth: 600 }}>
                <Typography variant="h4" gutterBottom>My Bands</Typography>
                {data.bands.map((band) => (
                    <Card key={band.id} style={{ marginBottom: '1rem' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>{band.name}</Typography>
                            <Typography variant="body1">Year: {band.year}</Typography>
                            <Typography variant="body1">Genre: {band.genre}</Typography>
                            <Typography variant="body1">Description: {band.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Layout>
      );
    }

export default AboutPage;