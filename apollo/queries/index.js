import { gql } from 'apollo-boost'

export const CURRENT_SEASON = gql`
  query getSeason {
    currentSeason {
      id
      year
    }
  }
`