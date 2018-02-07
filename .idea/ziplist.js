function zipList(array1, array2) {
  let array = [];
  let i = 0;
  for (i = 0; i < array1.length; i++) {
    array.push(array1[i]);
    array.push(array2[i]);
  }
  return array;
}

function zipListTheSimpleWay(array1, array2) {
  let array = _.flatten(_.zip(array1, array2));
  return array;
}

const array1 = [1, 2, 3, 4];
const array2 = ["a", "b", "c", "d"];
console.log(zipList(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));