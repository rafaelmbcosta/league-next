import { useMutation } from '@apollo/react-hooks'
import { CREATE_DISPUTE } from '@/apollo/mutations'
import { Button, Card, TextField, Alert } from "@material-ui/core"
import { useRouter } from 'next/router'
import { useState } from 'react'

const NewForm = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [createDispute, { error, networkError, called, loading }] = useMutation(CREATE_DISPUTE, {
    errorPolicy: 'all',
    update(cache, { data: { createDispute } }) {
      cache.modify({
        id: cache.identify({"__ref":`Season:${createDispute.season.id}`}),
        fields: {
          disputes(existing) {
            return [...existing, createDispute]
          }
        }
      })
    }
  })

  const successAlert = () => {
    if (!error && called && !loading) {
      return(
        <Alert severity="success">
          Periodo de Disputa criado com sucesso
        </Alert>
      )
    }
  }

  const teste = () => {
    if (networkError) {
      console.log(networkError)
    }
  }

  const errorAlert = () => {
    if (error) {
      return(
        <Alert severity="error">
          ERRO AO CRIAR: { error.networkError.result.errors.map(e => e.message).join(' ') }
        </Alert>
      )
    }
  }

  const handleFormSubmit = async () => {
    try {
      await createDispute({ variables: { name } })
    } catch(e) {
      console.log('esse é outro errro' +e)
    }
    setName('')
  }

  return(
    <form >
      { successAlert() }
      { errorAlert() }
      <Card>
        <TextField label="Nome do periodo de disputa" onChange={e => setName(e.target.value)} />
        <Button disabled={loading} variant="contained" onClick={() => handleFormSubmit()}>Criar</Button>
        <Button disabled={loading} variant="contained" onClick={() => setName('')}>Limpar</Button>
        <Button disabled={loading} variant="contained" onClick={() => router.push('/seasons')}>Voltar</Button>
      </Card>
    </form>
  )
}

export default NewForm