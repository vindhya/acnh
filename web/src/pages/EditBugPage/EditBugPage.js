import BugsLayout from 'src/layouts/BugsLayout'
import EditBugCell from 'src/components/EditBugCell'

const EditBugPage = ({ id }) => {
  return (
    <BugsLayout>
      <EditBugCell id={id} />
    </BugsLayout>
  )
}

export default EditBugPage
