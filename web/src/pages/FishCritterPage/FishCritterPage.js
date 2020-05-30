import FishCrittersLayout from 'src/layouts/FishCrittersLayout'
import FishCritterCell from 'src/components/FishCritterCell'

const FishCritterPage = ({ id }) => {
  return (
    <FishCrittersLayout>
      <FishCritterCell id={id} />
    </FishCrittersLayout>
  )
}

export default FishCritterPage
