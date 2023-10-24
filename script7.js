let a,b,c;
a = 15;
b = 10;
c = 2;

//функция первого действия по формуле a*b+c
const multipl = (num1, num2) => {
  return num1*num2;
};

//функция второго действия в формуле a*b+c
const add = (num1, num2) => {
  return num1+num2;
};


console.log(add(multipl(a,b),c));
