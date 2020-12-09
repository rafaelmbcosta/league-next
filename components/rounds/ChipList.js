import RoundChip from './RoundChip'

const ChipList = ({ rounds }) => {
  console.log(rounds)

  if (rounds === null || rounds === undefined) {
    return null
  }

  const chipLists = rounds.map(round => {
    return <RoundChip key={round.number} round={round} />
  })

  return(
    <>
      { chipLists }
    </>
  )
}

export default ChipList