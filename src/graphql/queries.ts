import {gql} from '@apollo/client';

export const GET_COUNTRY_BY_CODE = gql`
  query getPlayer($id: ID!) {
    getPlayer(id: $id) {
      firstName
      id
      lastName
      nickname
    }
  }
`;

export const GET_COUNTRIES = gql`
  query AllData {
    countries {
      code
      name
      emoji
    }
  }
`;
