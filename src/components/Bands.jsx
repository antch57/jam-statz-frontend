import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetBands {
    bands {
      id
      name
      genre
      year
    }
  }
`;

function Bands() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.bands.map(({ id, name, genre, year }) => (
    <div key={id}>
      <p>{name}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  ));
}

export default Bands;