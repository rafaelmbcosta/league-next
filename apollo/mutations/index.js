import { gql } from '@apollo/client'
import { Season } from '../fragments/season'
import { Dispute } from '../fragments/dispute'

export const CREATE_SEASON = gql`
  mutation createSeason {
    createSeason {
      ...SeasonDetails
    }
  }
  ${Season.fragments.details}
`

export const CREATE_DISPUTE = gql`
  mutation createDispute ($name: String!){
    createDispute(name: $name) {
      ...DisputeDetails
    }
  }
  ${Dispute.fragments.details}
`