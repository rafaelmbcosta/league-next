import { gql } from '@apollo/client'

export const CREATE_SEASON = gql`
  mutation createSeason {
    createSeason {
      id
      year
      disputes {
        id
        order
        name
      }
    }
  }
`

export const CREATE_DISPUTE = gql`
  mutation createDispute ($name: String!){
    createDispute(name: $name) {
      id
      order
      name
      season {
        id
      }
    }
  }
`