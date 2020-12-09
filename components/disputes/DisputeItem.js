import { makeStyles } from '@material-ui/core/styles'

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    marginTop: 5,
    width: 400
  },
})

const DisputeItem = ({dispute}) => {
  const classes = useStyles();

  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">{ dispute.name.toUpperCase() }</Typography>
        <Typography variant="body1" component="div">Aqui ficarão os rounds</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Adicionar Rodada</Button>
        <Button variant="outlined" size="small">Editar</Button>
        <Button variant="outlined" size="small">Remover</Button>
      </CardActions>
    </Card>
  )
}

export default DisputeItem