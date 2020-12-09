import { Alert } from '@material-ui/core'

const SuccessAlert = ({ error, called, loading }) => {
  if (!error && called && !loading) {
    return(
      <Alert severity="success">
        Periodo de Disputa criado com sucesso
      </Alert>
    )
  }
  return null
}

export default SuccessAlert