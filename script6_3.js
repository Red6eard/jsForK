// leetspeack

let inputString = "javascript is awesome";


const translate = (input,output) => {
  output = "";
  for (let i = 0; i<input.length; i++){
    if (input[i] === "a"){
      output += "4";
    }else if( input[i] === "i"){
      output += "1";
    }else if(input[i] === "e"){
      output += "3";
    }else if(input[i] === "o"){
      output += "0";
    }else{
      output += input[i];
    }
  }
  return output
};

console.log(translate(inputString));
