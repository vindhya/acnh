import { db } from 'src/lib/db'

export const fishCritters = () => {
  return db.fishCritter.findMany()
}

export const fishCritter = ({ id }) => {
  return db.fishCritter.findOne({
    where: { id },
  })
}

export const createFishCritter = ({ input }) => {
  return db.fishCritter.create({
    data: input,
  })
}

export const updateFishCritter = ({ id, input }) => {
  return db.fishCritter.update({
    data: input,
    where: { id },
  })
}

export const deleteFishCritter = ({ id }) => {
  return db.fishCritter.delete({
    where: { id },
  })
}
