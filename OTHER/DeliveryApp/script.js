const   API = `https://62c4bdb47d83a75e39ffee8a.mockapi.io`;

const controller  = async (url, method=`GET`, obj) => {
    let options = { method,
                    headers:{ "Content-type": "application/json" }
                  };
    if(obj) options.body = JSON.stringify(obj);
    let request = await fetch(url, options);
    if(request.ok){ return request.json(); }
    else{ throw request.status; }
}

let UsrCount = 0;
const getRest = async () => await controller(API+`/rest`)
const getUser = async () => await controller(API+`/restUser`)

const getUserArr = async () => {
    try{
        if(localStorage.getItem('userName')) {
            JSON.parse(localStorage.getItem('userName'))
        }
        else{
            let UserArr = await getUser();
            localStorage.setItem('userName', JSON.stringify(UserArr))
        } 
        return JSON.parse(localStorage.getItem('userName'))
        }
    catch(err)
    {
        alert(`Load page error!, reload page! `)
        location.reload();
    }
};

const getUserLogin = () =>{
    let storageUsers = JSON.parse(localStorage.getItem('userName'))
    if (storageUsers.status) {console.log(`singl true`); return true;}
    else return false;
}

const setUserLogOut = async e =>
{                                   //???????
    if (getUserLogin())
    {
        let storageUsers = JSON.parse(localStorage.getItem('userName'))
        console.log(storageUsers)
        if(storageUsers.shoppingCart.length) {
            let addedUser = await controller(API+`/restUser/${storageUsers.id}`, `PUT`, shoppingCart=`+++`)
            console.log(`in if:  ${storageUsers.shoppingCart.length} ***`)
        }

        localStorage.removeItem('userName');
        document.querySelector(`#userLogOut`).style.display='none';
       //location.reload()
    }
}

const renderProduct = obj => {
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
        ItemDiv.addEventListener(`click`,()=>{
            let  storageUsers = JSON.parse(localStorage.getItem('userName'))
        document.querySelector('#headerShoppingCartCount').innerHTML=++UsrCount;
        storageUsers.shoppingCart.push({id:obj.id,product:item.nameProduct,count:1, price:item.price})
      


        console.log(`name:`, storageUsers.shoppingCart)
        console.log(`localuser: `, localStorage.getItem('userName'));
        console.log(`MAGAZ ID: `, obj.id);
        console.log(`MAGAZ name: `, obj.name);
        console.log(`MAGAZ product: `, item.nameProduct);
        console.log(`MAGAZ price: `, item.price);
            
        })
    });  
}

const restRender = async () => {
    try{
        let restArr = await getRest();
        let userArr = await getUserArr()
        document.querySelector(`#userLogOut`).addEventListener(`click`, e =>{
            e.preventDefault();
            console.log(`click!`)
            setUserLogOut();
        })
    restArr.forEach(item=>
    {
       let  RestAside = document.querySelector(`.container-aside`);
       let RestLogo = document.createElement(`img`);
       RestLogo.className = "container-aside--item";
       RestLogo.id = `REST${item.id}`;
       RestLogo.setAttribute (`src`, `${item.logo}`);
       RestAside.append(RestLogo)

        let btn = document.querySelector( `#REST${item.id}`);
       
        btn.addEventListener('click', (e)=>{
        if (getUserLogin()) {
        document.querySelector(`#userLogOut`).style.removeProperty("display");
        restArr.forEach(inner=>{
            let localID = document.querySelector(`#REST`+inner.id);
            localID.id == btn.id ? localID.style.opacity=`100%` : localID.removeAttribute("style");
        renderProduct(item);
        })}
        else{restLogin(item)};
        })
    })
    } catch(err){
        console.log(`OH!! IN CATCH`);
        console.log(err);
    }
}

const restLogin = async (localRest) => {
    let ItemDoc = document.querySelector(`.container-content`);
    ItemDoc.innerHTML ='';
    Loginform = document.createElement('form');
    Loginform.className = `container-content--userForm`;
    Loginform.id = `LoginForm`;
    Loginform.innerHTML=`
        <h2 class="title">Secure Sign In</h2>
        <p class="desription">For current customers</p>
        <div class="container-content--error">Invalid email address or password.</div>
        <label>
            <input type="email" placeholder="Email Address" data-name="email" value="ivan@gmail.com" required>
        </label>
        <label>
            <input type="password" placeholder="Password" data-name="password" value="123" required>
        </label>
        <button class="btn">Sign in</button>`;
    ItemDoc.append(Loginform);

    RegistrationForm = document.createElement('form');
    RegistrationForm.className = `container-content--userForm`;
    RegistrationForm.id = `RegistrationForm`;
    RegistrationForm.innerHTML=`
        <h2 class="title">Quick Registration</h2>
        <p class="desription">For new customers</p>
        <div class="container-content--error">Invalid email address or password.</div>
        <label>
            <input type="text" placeholder="Full name" data-name="name" value="Ivan" required>
        </label>
        <label>
            <input type="email" placeholder="Email Address" data-name="email" value="ivan@gmail.com" required>
        </label>
        <label>
            <input type="password" placeholder="Password" data-name="password" value="123" required>
        </label>
        <label>
           <input type="password" placeholder="Verify Password" data-name="passwordVerify" value="123" required>
        </label>
        <button class="btn">Create Account</button>`;
    ItemDoc.append(RegistrationForm);

    LoginForm.addEventListener(`submit`, e => { 
        storageUsers = JSON.parse(localStorage.getItem('userName'))
		e.preventDefault(); 
		let email = e.target.querySelector(`input[data-name="email"]`).value,
			password = e.target.querySelector(`input[data-name="password"]`).value,
			rememberUser = storageUsers.find(user => user.email === email);
		if (rememberUser && rememberUser.password === password)
			{
                storageUsers.forEach(item =>{ if(item.email == email) {item.status = true;	localStorage.setItem('userName', JSON.stringify(item));	} } )
	document.querySelector(`#userLogOut`).style.removeProperty("display");
                renderProduct(localRest);
            }
		else if(!rememberUser){
			let err = e.target.querySelector(`.container-content--error`);
			err.style.display="block";
			err.innerHTML = `Invalid email 🥵`;
			setTimeout(()=>{err.style.removeProperty("display")}, 2000);
		}
		else {
			let err = e.target.querySelector(`.container-content--error`);
			err.style.display="block";
			err.innerHTML = `Invalid password 🥵`;
			setTimeout(()=>{err.style.removeProperty("display")}, 2000);
		}
    })

    RegistrationForm.addEventListener(`submit`,async e => { 
        storageUsers = JSON.parse(localStorage.getItem('userName'))
		e.preventDefault(); 
		let name = e.target.querySelector(`input[data-name="name"]`).value,
			email = e.target.querySelector(`input[data-name="email"]`).value.toLowerCase(),
			password = e.target.querySelector(`input[data-name="password"]`).value.trim(),
			passwordVerify = e.target.querySelector(`input[data-name="passwordVerify"]`).value.trim(),
			rememberUser = storageUsers.find(user => user.email === email);
		if ( !password || password !== passwordVerify ){
				let err = e.target.querySelector(`.container-content--error`);
				err.style.display="block";
				err.innerHTML = `Password not matches! or Empty!  🥵`;
				setTimeout(()=>{err.style.removeProperty("display")}, 2000);
			}	
		else if(rememberUser && rememberUser.email == email){
			let err = e.target.querySelector(`.container-content--error`);
			err.style.display="block";
			err.innerHTML = `User with email ${email} already exist! 🥵`;
			setTimeout(()=>{err.style.removeProperty("display")}, 2000);
		}
		else {
			let newUser = { name: name, email: email, password: password, orders: [], shoppingCart: []};
            let addedUser = await controller(API+`/restUser`, `POST`, newUser)
                .then(()=>{newUser.status= true; localStorage.setItem('userName', JSON.stringify(newUser));} )
            document.querySelector(`#userLogOut`).style.removeProperty("display");
            renderProduct(localRest);
		}
	});
}

const renderShop = () => {

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
            ItemDiv.addEventListener(`click`,()=>{
                let  storageUsers = JSON.parse(localStorage.getItem('userName'))
            document.querySelector('#headerShoppingCartCount').innerHTML=++UsrCount;
            storageUsers.shoppingCart.push({id:obj.id,product:item.nameProduct,count:1, price:item.price})
          
    
    
            console.log(`name:`, storageUsers.shoppingCart)
            console.log(`localuser: `, localStorage.getItem('userName'));
            console.log(`MAGAZ ID: `, obj.id);
            console.log(`MAGAZ name: `, obj.name);
            console.log(`MAGAZ product: `, item.nameProduct);
            console.log(`MAGAZ price: `, item.price);
                
            })
        });  
   
   
    }

restRender();
//getStorageUsers()