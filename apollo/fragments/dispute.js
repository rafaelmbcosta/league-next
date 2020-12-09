import { gql } from '@apollo/client'

export const Dispute = {
  fragments: {
    details: gql`
      fragment DisputeDetails on Dispute {
        id
        order
        name
        rounds {
          id
          number
        }
        season {
          id
        }
      }
    `
  }
}