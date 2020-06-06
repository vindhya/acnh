export const orderDescPrice = (bugs, fish) => {
  return bugs.concat(fish).sort((a, b) => b.price - a.price)
}
