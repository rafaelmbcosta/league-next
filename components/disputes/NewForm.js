import { useMutation } from '@apollo/react-hooks'
import { CREATE_DISPUTE } from '@/apollo/mutations'
import { Button, Card, TextField, Alert } from "@material-ui/core"
import { useRouter } from 'next/router'
import { useState } from 'react'

const NewForm = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [createDispute, { error, called, loading }] = useMutation(CREATE_DISPUTE)

  const successAlert = () => {
    if (called && !error) {
      return(
        <Alert severity="success">
          Periodo de Disputa criado com sucesso
        </Alert>
      )
    }
  }

  const errorAlert = () => {
    if (error) {
      return(
        <Alert severity="error">
          Erro ao criar Disputa
        </Alert>
      )
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDispute({ variables: { name }})
    } catch(e) {
      console.log(e)
    }
    setName('')
  }

  return(
    <form >
      { successAlert() }
      {/* { errorAlert() } */}
      { called } - { error }
      <Card>
        <TextField label="Nome do periodo de disputa" onChange={e => setName(e.target.value)} />
        <Button disabled={loading} variant="contained" onClick={handleFormSubmit}>Criar</Button>
        <Button disabled={loading} variant="contained" onClick={() => setName('')}>Limpar</Button>
        <Button disabled={loading} variant="contained" onClick={() => router.push('/seasons')}>Voltar</Button>
      </Card>
    </form>
  )
}

export default NewForm