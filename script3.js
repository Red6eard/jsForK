let visitorAge = 21;
let visitorAccompanied = false;


//с помощью if-else

/*
const isEntryAllowed = (age,accompanied) => {
  if (age>=12 || accompanied) {
    return "Welcome!"
  } else {
    return "No entry!"
  }
 };
 */
 
 //с помощью тернарника
 
 const isEntryAllowed = (age,accompanied) =>  age>=12 || accompanied ? 'Welcome!' : 'No entry!'


console.log(isEntryAllowed(visitorAge,visitorAccompanied));