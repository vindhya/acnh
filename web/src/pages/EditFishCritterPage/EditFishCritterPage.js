import FishCrittersLayout from 'src/layouts/FishCrittersLayout'
import EditFishCritterCell from 'src/components/EditFishCritterCell'

const EditFishCritterPage = ({ id }) => {
  return (
    <FishCrittersLayout>
      <EditFishCritterCell id={id} />
    </FishCrittersLayout>
  )
}

export default EditFishCritterPage
