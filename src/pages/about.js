import React from "react";
import {useQuery, gql} from '@apollo/client';
import Layout from "../components/layout";

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
                <h2>My Bands</h2>
                {data.bands.map((band) => (
                    <div key={band.id}>
                    <h3>{band.name}</h3>
                    <p>Year: {band.year}</p>
                    <p>Genre: {band.genre}</p>
                    <p>Description: {band.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
      );
    }

export default AboutPage;