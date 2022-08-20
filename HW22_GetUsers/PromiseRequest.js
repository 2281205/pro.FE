let children=[];

const getFile = (file , i) =>{ 
    let xhr = new XMLHttpRequest();
    xhr.open (`GET`, `${file}`);
    xhr.send();
    xhr.addEventListener (`readystatechange`, () => {
        if(xhr.readyState === 4){
            if (xhr.status<399 && xhr.status >= 200){
                let Obj = JSON.parse(xhr.response);
                children.push(...Obj.children);
                
                i && console.log(children);
            }
            else{
                console.log(`file: ${file} || error TEXT: ${xhr.statusText}`);
            }
        }
    })
}

let myPromise = new Promise(
    function(resolve){
        resolve()
    }
)
myPromise
    .then(
        function(){ getFile(`./DB-files/data.json`) }
    )
    .then(
        function(){ getFile(`./DB-files/data2.json`,true)  }
    )
    .then(
        function(){ 
            console.log(`Job is done! 💚`); 
            console.log(children); 
        }
    )
   
//http://djotto.dyns.dev/work.fe/data.json
//http://djotto.dyns.dev/work.fe/data2.json