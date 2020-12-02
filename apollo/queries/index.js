import { gql } from '@apollo/client'

export const CURRENT_SEASON = gql`
  query getSeason {
    currentSeason {
      id
      year
    }
  }
`