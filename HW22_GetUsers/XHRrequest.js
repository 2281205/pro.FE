let children=[]

const getFile = (file, cb, i) =>{ 
    let xhr = new XMLHttpRequest();
    xhr.open (`GET`, `${file}`);
    xhr.send();
    xhr.addEventListener (`readystatechange`, () => {
        if(xhr.readyState === 4 && xhr.status<399 && xhr.status >= 200 )
        {
        let Obj = JSON.parse(xhr.response);
        return cb(Obj.children, i);
        }
    })
}

const renderFile = (file, i) => {
    children.push(...file);
    i === 2 && console.log(children);
}

getFile(`./DB-files/data.json`, renderFile, 1)
getFile(`./DB-files/data2.json`, renderFile, 2)

//http://djotto.dyns.dev/work.fe/data.json
//http://djotto.dyns.dev/work.fe/data2.json