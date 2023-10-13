let myString = "heLlo woRlD";

const normalizedString = (string) => {
  return myString.slice(0,1).toUpperCase() + myString.slice(1).toLowerCase();
};


console.log(normalizedString(myString));