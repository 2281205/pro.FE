const getFile = file => {
    let response = fetch(file);
    return response.then(data => data.status === 200 ? data.json() : Promise.reject(data.statusText))
}

Promise
    .all([
        getFile(`../files/data.json`),
        getFile(`../files/data2.json`)
    ])
    .finally(
        () => console.log(`🌸 in first finally`)
    )
    .then(
        files => {
            console.log(`💚 in first resolve`);


            return files.reduce((result, arr) => {
                result.push(...arr.children);
                return result;
            },[])
        }
    )
    .finally(
        () => console.log(`🌸 in second finally`)
    )
    .then(
        finalArr => {
            console.log(`💚 in second resolve`);
            console.log(finalArr);
        }
    )
    .catch(
        err => console.log(`💔 in catch`)
    )