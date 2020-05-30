import { db } from 'src/lib/db'

export const bugCritters = () => {
  return db.bugCritter.findMany()
}

export const bugCritter = ({ id }) => {
  return db.bugCritter.findOne({
    where: { id },
  })
}

export const createBugCritter = ({ input }) => {
  return db.bugCritter.create({
    data: input,
  })
}

export const updateBugCritter = ({ id, input }) => {
  return db.bugCritter.update({
    data: input,
    where: { id },
  })
}

export const deleteBugCritter = ({ id }) => {
  return db.bugCritter.delete({
    where: { id },
  })
}
