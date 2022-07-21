const       API = `https://62c4bdb47d83a75e39ffee8a.mockapi.io`,
    controller  = async (url, method=`GET`, obj) => {
        let options = { method,
                        headers:{ "Content-type": "application/json" }
                      };
            if(obj) options.body = JSON.stringify(obj);
            let request = await fetch(url, options);
    if(request.ok){
        return request.json();}
    else{ throw request.status; }
}

const getRest = async () => await controller(API+`/rest`)

const render = obj => {

    let ItemDoc = document.querySelector(`.container-content`);

ItemDoc.innerHTML ='';
    obj.product.forEach(item=>
        
        {
            ItemDiv = document.createElement('div');
            ItemDiv.className = `container-content--item`;
            ItemDiv.innerHTML=`
                    <img src="${item.URL}" alt="${item.nameProduct}">
                    <h3>${item.nameProduct} ${item.optional ? item.optional : ''}</h3>
                    <span>Price: ${item.price} $</span>
                    <button>Buy This   <b>${item.nameProduct} ${item.optional ? item.optional : ''}</b></button>`;
        ItemDoc.append(ItemDiv);
        ItemDiv.addEventListener(`click`,()=>console.log(`+++`, obj.name))

});
        
}


const restRender = async () => {
    try{
        let getRest11 = await getRest();

        console.log(getRest11)
let arr =[];

getRest11.forEach(item=>
    {
       let  RestGDE = document.querySelector(`.container-aside`);
       let RestKTO =document.createElement(`img`);
        RestKTO.className = "container-aside--item";
        RestKTO.id = `REST${item.id}`;
        RestKTO.setAttribute (`src`, `${item.logo}`);
        RestGDE.append(RestKTO)

   // innerHTML+=(`<img class="container-aside--item" id=REST${item.id} src="${item.logo}">`)
    let btn = document.querySelector( `#REST${item.id}`);
    // console.log(btn)

    btn.addEventListener('click', (e)=>{
        getRest11.forEach(inner=>{
            let xxx = document.querySelector(`#REST`+inner.id);
            xxx.id == btn.id ? xxx.style.opacity=`100%` : xxx.style.opacity=`30%`;
        render(item);
    })
    })
})
    } catch(err){

        console.log(`OH!! IN CATCJ`);
        console.log(err);
    }
}
restRender();