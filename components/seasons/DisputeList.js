import DisputeItem from './DisputeItem'

const DisputeList = ({ disputes }) => {
  const list = () => {
    return disputes.map(element => {
      return <DisputeItem dispute={element} key={element.id} />
    })
  }
  return(
    <div>
      { list() }
    </div>
  )
}

export default DisputeList