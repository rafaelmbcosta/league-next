import { gql } from '@apollo/client'

export const CREATE_SEASON = gql`
  mutation createSeason {
    createSeason {
      id,
      year
    }
  }
`