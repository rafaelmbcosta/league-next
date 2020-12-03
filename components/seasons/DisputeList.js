const DisputeList = ({ disputes }) => {
  const list = () => {
    return disputes.map(element => {
      element.name
    })
  }
  return(
    <div>
      --- disputes ---
      { list() }
    </div>
  )
}

export default DisputeList