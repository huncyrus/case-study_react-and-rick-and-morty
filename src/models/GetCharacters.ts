import { gql } from '@apollo/client';

/**
 * List of characters GraphQL query
 */
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;
