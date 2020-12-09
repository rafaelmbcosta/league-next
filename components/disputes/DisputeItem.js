import { Card, CardContent  } from '@material-ui/core'

const DisputeItem = ({dispute}) => {
  return(
    <Card>
      <CardContent>
        { dispute.name }
      </CardContent>
    </Card>
  )
}

export default DisputeItem