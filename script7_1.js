
let arraySome1 = [1, 2, 3];
let arraySome2 = [,2,3];

const areArraysSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length){
    return false
  };
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr2[i]){
      return true
    } else {
      return false
    }
  }
};

console.log(areArraysSame(arraySome1,arraySome2));
