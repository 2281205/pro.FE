function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function calucation(a, b, operation){
    let result;

    switch(operation){
        case `+`:
            result = sum(a,b);
            break;
        case `-`:
            result = sub(a,b);
            break;
        case `*`:
            result = mul(a,b);
            break;
        case `/`:
            result = div(a,b);
            break;
    }

    return `${a} ${operation} ${b} = ${result}`;
}

const operations = [`+`,`-`,`*`,`/`];
let userOperation, a, b;

do{
    userOperation = prompt(`Choose operation: ${operations.join(`, `)}`, operations[0]);
    
    if(userOperation)
        userOperation = userOperation.replaceAll(` `,``);
} while(operations.indexOf(userOperation) === -1);

do{
    a = +prompt(`Enter a`);
} while(a === null || a === `` || isNaN(a));

do{
    b = +prompt(`Enter b`);
} while(b === null || b === `` || isNaN(b) || userOperation===`/` && b===0);

let userResult = calucation(a,b,userOperation);
console.log(userResult);