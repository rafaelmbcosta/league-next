import { useQuery, useMutation } from '@apollo/react-hooks'
import { CURRENT_SEASON } from '@/apollo/queries'
import { CREATE_SEASON } from '@/apollo/mutations'

import SeasonData from '@/components/seasons/SeasonData'

const Index = () => {
  const { loading, error, data, refetch } = useQuery(CURRENT_SEASON)
  const [createSeason] = useMutation(CREATE_SEASON)

  const season = data && data.currentSeason || null

  const seasonData = () => {
    if(season) {
      return <SeasonData data={season} />
    }
  }

  const createSeasonHandler = async () => {
    await createSeason()
    refetch()
  }

  const createButton = () => {
    if (!season) {
      return <>
        <p>Nenhuma temporada cadastrada</p>
        <input type="button" value="Criar Temporada" onClick={() => createSeasonHandler()} />
      </>
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
      <h1>TEMPORADAS</h1>
      { seasonData() }
      { createButton() }
    </>
  )
}

export default Index