import { useQuery, useMutation } from '@apollo/react-hooks'
import { CURRENT_SEASON } from '@/apollo/queries'
import { CREATE_SEASON } from '@/apollo/mutations'
import { NetworkStatus } from '@apollo/client'
import SeasonData from '@/components/seasons/SeasonData'

const Index = () => {
  const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(CURRENT_SEASON)
  const [createSeason, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_SEASON)
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

  const creatingErrors = () => {
    if (mutationError) {
      return <div>{mutationError}</div>
    }
  }

  if (queryLoading) return <div>Loading season situation...</div>

  if (mutationLoading) return <div>Updating season situation...</div>

  if (queryError) return <div>{queryError.message}</div>

  if (networkStatus === NetworkStatus.refetch) return 'Reloading !'

  return (
    <>
      <h1>TEMPORADAS</h1>
      { seasonData() }
      { createButton() }
      { creatingErrors() }
    </>
  )
}

export default Index