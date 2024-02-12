import React from "react";
import { Link } from "gatsby";

import {useQuery, gql} from '@apollo/client';

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
        <main>
          <h1>About Me</h1>
          <Link to="/">Home</Link>
          <p>I'm good enough, I'm smart enough, and gosh darn it, people like me!</p>

          <h2>My Bands</h2>
          {data.bands.map((band) => (
            <div key={band.id}>
              <h3>{band.name}</h3>
              <p>Year: {band.year}</p>
              <p>Genre: {band.genre}</p>
              <p>Description: {band.description}</p>
            </div>
          ))}
        </main>
      );
    }

export default AboutPage;