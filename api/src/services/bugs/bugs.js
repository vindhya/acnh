import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const bugs = () => {
  return db.bug.findMany()
}

export const bug = ({ id }) => {
  return db.bug.findOne({
    where: { id },
  })
}

export const createBug = ({ input }) => {
  requireAuth()
  return db.bug.create({
    data: input,
  })
}

export const updateBug = ({ id, input }) => {
  requireAuth()
  return db.bug.update({
    data: input,
    where: { id },
  })
}

export const deleteBug = ({ id }) => {
  requireAuth()
  return db.bug.delete({
    where: { id },
  })
}
