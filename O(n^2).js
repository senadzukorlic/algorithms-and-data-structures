const boxes = [1, 2, 3, 4, 5]

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    console.log(`[ ${boxes[i]} ][ ${boxes[j]} ]`)
  }
}
// O(n^2)
