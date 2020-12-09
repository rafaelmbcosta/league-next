import { gql } from '@apollo/client'
import { Season } from '../fragments/season'

export const CURRENT_SEASON = gql`
  query getSeason {
    currentSeason {
      ...SeasonDetails
    }
  }
  ${Season.fragments.details}
`