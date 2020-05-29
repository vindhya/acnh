import BugsLayout from 'src/layouts/BugsLayout'
import BugCell from 'src/components/BugCell'

const BugPage = ({ id }) => {
  return (
    <BugsLayout>
      <BugCell id={id} />
    </BugsLayout>
  )
}

export default BugPage
