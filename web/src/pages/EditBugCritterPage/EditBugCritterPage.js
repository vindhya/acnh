import BugCrittersLayout from 'src/layouts/BugCrittersLayout'
import EditBugCritterCell from 'src/components/EditBugCritterCell'

const EditBugCritterPage = ({ id }) => {
  return (
    <BugCrittersLayout>
      <EditBugCritterCell id={id} />
    </BugCrittersLayout>
  )
}

export default EditBugCritterPage
