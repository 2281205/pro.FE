const convert = obj => {
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === `object`){
            let innerObj = obj[key];

            for(let key in innerObj){
                newObj[key] = innerObj[key];
            }
        } else{
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

let newObj = convert(obj);
console.log(newObj);


        // И вариант с рекурсией:

        // const convert = (obj, newObj={}) => {
        //     for(let key in obj){
        //         typeof obj[key] === `object` && !Array.isArray(obj[key]) ? convert(obj[key], newObj): newObj[key] = obj[key];
        //     }
        //     return newObj;
        // }

        // let newObj = convert(obj);
        // console.log(newObj);