import { useMutation } from '@apollo/react-hooks'
import { CREATE_DISPUTE } from '@/apollo/mutations'
import { Button, Card, TextField } from "@material-ui/core"
import { useRouter } from 'next/router'
import { useState } from 'react'
import SuccessAlert from './SuccessAlert'
import ErrorAlert from './ErrorAlert'

const NewForm = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [createDispute, { error, called, loading }] = useMutation(CREATE_DISPUTE, {
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

  const handleFormSubmit = async () => {
    await createDispute({ variables: { name } })
    setName('')
  }

  return(
    <form >
      <SuccessAlert error={error} called={called} loading={loading} />
      <ErrorAlert error={error} />
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