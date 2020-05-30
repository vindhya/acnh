import BugDetailCell from 'src/components/BugDetailCell'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const BugDetailPage = ({ id }) => {
  return (
    <MainLayout>
      <BugDetailCell id={id} />
    </MainLayout>
  )
}

export default BugDetailPage
