import { Chip } from '@material-ui/core'

const RoundChip = ({round}) => {
  console.log(round)
  return (
    <Chip
      label={round.number}
      // onDelete={handleDelete}
      variant="outlined"
    />
  )
}

export default RoundChip