import { useQuery } from '@apollo/react-hooks'
import { CURRENT_SEASON } from '../../apollo/queries'

const SeasonData = (data) => {
  const seasonExist = data && data.currentSeason || null

  const seasonData = () => {
    if (seasonExist) {
      return <div>{ data.currentSeason.year }</div>
    } else {
      return <div>Nenhuma temporada</div>
    }
  }

  return (
    <>
      <div>Seasons</div>
      { seasonData() }
    </>
  )
}

export default SeasonData