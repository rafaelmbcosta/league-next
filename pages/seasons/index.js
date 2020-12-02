import { useQuery } from '@apollo/react-hooks'
import { CURRENT_SEASON } from '../../apollo/queries'
import SeasonData from

const Index = () => {
  const { loading, error, data } = useQuery(CURRENT_SEASON)

  const seasonExist = data && data.currentSeason || null

  const createButton = () => {
    if (!seasonExist) {
      console.log('entrou no btn')
      return <input type="button" value="Criar Temporada"  />
    }
  }

  if (loading) {
    return <div>Loading season situation...</div>
  }

  if(error) {
    return <div>{error + ''}</div>
  }

  return (
    <>
      <div>Seasons</div>
      { seasonData() }
    </>
  )
}

export default Index