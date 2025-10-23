//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For example
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','i']
//should return false.
//------------
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','x']
//should return true.

function findCommonCharacter(array1, array2) {
  let lgt

  if (array1.length > array2.length) {
    lgt = array1.length
  } else {
    lgt = array2.length
  }

  for (let i = 0; i < lgt; i++) {
    for (let j = 0; j < lgt; j++) {
      if (array1[i] === array2[j]) {
        console.log(
          `Element niza 1 pod rednim brojem - [${[
            i,
          ]}], je jednak sa elementom niza 2 pod rednim brojem - [${[j]}]`
        )
      }
    }
  }
}
const arr1 = ["z", "y", "x"]
const arr2 = ["a", "b", "c", "x"]
findCommonCharacter(arr1, arr2)

function findCommonCharacter2(array1, array2) {
  // loop through first array and create object where properties === items in the array
  // loop through second array and check if item in second array exists on created object.
}
