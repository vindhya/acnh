import BugCrittersLayout from 'src/layouts/BugCrittersLayout'
import BugCritterCell from 'src/components/BugCritterCell'

const BugCritterPage = ({ id }) => {
  return (
    <BugCrittersLayout>
      <BugCritterCell id={id} />
    </BugCrittersLayout>
  )
}

export default BugCritterPage
