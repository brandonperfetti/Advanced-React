import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. Get the existing Product
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  console.log(data, error, loading);
  // 2. Get the mutation to update the Product
  // 3. Form needs to handle updates
  return <p>Update {id}!</p>;
}
