import { HEMISPHERES } from 'src/constants'

export const oppositeHemi = (hemisphere) =>
  hemisphere === HEMISPHERES.NORTH ? HEMISPHERES.SOUTH : HEMISPHERES.NORTH
