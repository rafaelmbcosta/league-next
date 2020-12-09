import { Alert } from '@material-ui/core'

const ErrorAlert = ({ error }) => {
  if (error) {
    return(
      <Alert severity="error">
        ERRO AO CRIAR: { error.networkError.result.errors.map(e => e.message).join(' ') }
      </Alert>
    )
  }
  return null
}

export default ErrorAlert