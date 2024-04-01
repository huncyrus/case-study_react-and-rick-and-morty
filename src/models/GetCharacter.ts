import { gql } from '@apollo/client';

/**
 * Retrieve one character details
 */
export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;
