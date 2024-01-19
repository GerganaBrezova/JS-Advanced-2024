function oddPositions(array) {
//  let newArray = [];

//  array.forEach((element, index) => {
//      if (index % 2 != 0){
//          element *= 2;
//          newArray.push(element);
//      }
//  });

//  return newArray.reverse().join(' ');

    let newArray = array.filter((el, index) => index % 2 != 0).map(el => el * 2).reverse().join(' ');
    return newArray;
}

console.log(oddPositions([3, 0, 10, 4, 7, 3]));