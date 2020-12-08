import DisputeList from '../disputes/DisputeList'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

const SeasonData = ({ data }) => {
  const router = useRouter()

  const handleNewDispute = () => {
    router.push('/disputes/new')
  }
  return (
    <>
      <h3>Temporada: { data.year }</h3>
      <DisputeList disputes={data.disputes} />
      <Button variant="contained" onClick={handleNewDispute}>Criar mês de Disputa</Button>
    </>
  )
}

export default SeasonData