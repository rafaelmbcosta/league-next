import { gql } from '@apollo/client'

export const Season = {
  fragments: {
    details: gql`
      fragment SeasonDetails on Season {
        id
        year
        disputes {
          id
          order
          name
        }
      }
    `
  }
}