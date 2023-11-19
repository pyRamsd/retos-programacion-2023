/*
 si un numero es par su reciduo de división modular es 0,
 sino es impar.

 para determinar un número fibonacci se puede usar la formula
 test de la raiz cuadrada de 5° o el criterio de la suma  
 de cuadrados.
 
 Un número n es número fibonacci si y solo si uno de los 
 siguientes es verdadero: 
 5n^2 + 4  ó  5n^2 - 4
*/

function isPar(num){
    if(num % 2 === 0){
        return true; 
    }
    return false; // es impar
}

function isPrime(num){
    let sqrt = Math.floor(Math.sqrt(num));
    
    if(num <= 1){
        return false; // uno no es ni primo ni par
    }
    
    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0){
            return false;
        }
    }
    
    return true;
}

function isFibonacci(num){
    const firstResult = 5 * num**2 + 4;
    const secondResult = 5 * num**2 - 4;

    const firstSqrt = Math.sqrt(firstResult);
    const secondSqrt = Math.sqrt(secondResult);
    
    
    if(Number.isInteger(firstSqrt) || Number.isInteger(secondSqrt)){
        return true;
    }
    return false;
}


const numberIs = (num) =>{
    let result = "";

    if(isPrime(num)){
        result = `${num} es primo, `;
    }else{
        result = `${num} no es primo, `;
    }

    if(isFibonacci(num)){
        result += "fibonacci, ";
    }
    else{
        result += "no es fibonacci, "
    }

    if(isPar(num)){
        result += "y es par";
    }
    else{
        result += "y es impar";
    }

    console.log(result);

}

const num = 7;

numberIs(num);
