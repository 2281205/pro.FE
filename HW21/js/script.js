const PRODUCTS = [
	{
		id: 1,
		title: "Aircraft Carrier",
		img: "aircraft-carrier",
		price: 30000,
		sale: true,
		salePercent: 2,
		categories: ['Boat']
	},
	{
		id: 2,
		title: "Boat",
		img: "boat",
		price: 700,
		sale: false,
		categories: ['Boat']
	},
	{
		id: 3,
		title: "Bus",
		img: "bus",
		price: 300,
		sale: true,
		salePercent: 10,
		categories: ['Bus']
	},
	{
		id: 4,
		title: "Cabriolet",
		img: "cabriolet",
		price: 900,
		sale: true,
		salePercent: 25,
		categories: ['Car']
	},
	{
		id: 5,
		title: "Commercial Plane",
		img: "commercial-plane",
		price: 1000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 6,
		title: "Electric car",
		img: "electric-car",
		price: 3000,
		sale: false,
		categories: ['Car']
	},
	{
		id: 7,
		title: "Helicopter police",
		img: "helicopter-police",
		price: 1000,
		sale: true,
		salePercent: 15,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 8,
		title: "Helicopter",
		img: "helicopter",
		price: 900,
		sale: true,
		salePercent: 35,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 9,
		title: "Minibus",
		img: "minibus",
		price: 700,
		sale: true,
		salePercent: 5,
		categories: ['Car', 'Bus']
	},
	{
		id: 10,
		title: "Motorbike",
		img: "motorbike",
		price: 200,
		sale: true,
		salePercent: 25,
		categories: ['Bike']
	},
	{
		id: 11,
		title: "Off Road",
		img: "off-road",
		price: 600,
		sale: false,
		categories: ['Car']
	},
	{
		id: 12,
		title: "Police Car",
		img: "police-car",
		price: 100,
		sale: false,
		categories: ['Car']
	},
	{
		id: 13,
		title: "School Bus",
		img: "school-bus",
		price: 150,
		sale: true,
		salePercent: 8,
		categories: ['Bus']
	},
	{
		id: 14,
		title: "Scooter",
		img: "scooter",
		price: 80,
		sale: true,
		salePercent: 13,
		categories: ['Bike']
	},
	{
		id: 15,
		title: "Small Plane",
		img: "small-plane",
		price: 3000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 16,
		title: "Speed Boat",
		img: "speed-boat",
		price: 2000,
		sale: true,
		salePercent: 34,
		categories: ['Boat']
	},
	{
		id: 17,
		title: "Sport Car",
		img: "sport-car",
		price: 10000,
		sale: true,
		salePercent: 3,
		categories: ['Car']
	},
	{
		id: 18,
		title: "Suv",
		img: "Suv",
		price: 300,
		sale: true,
		salePercent: 13,
		categories: ['Car', 'Bus']
	}
];

const USERS = [
	{
		name: 'Ivan',
		email: 'ivan@gmail.com',
		password: '123',
		favourites: [9, 18, 7],
		orders: [{id: 2, count: 2},{id: 16, count: 4},{id: 1, count: 1}],
		shoppingCart: [{id: 9, count: 1},{id: 3, count: 1},{id: 10, count: 1}],
		status: false
	},
	{
		name: 'Oksana',
		email: 'oksana@gmail.com',
		password: '123',
		favourites: [1, 2, 3, 5],
		orders: [{id: 2, count: 2},{id: 3, count: 4},{id: 10, count: 3}],
		shoppingCart: [{id: 5, count: 1},{id: 6, count: 6}],
		status: false
	}
];

const getStorageUsers = () => {
    localStorage.getItem('userName') 	? JSON.parse(localStorage.getItem('userName'))
                                    	: localStorage.setItem('userName', JSON.stringify(USERS));
    return JSON.parse(localStorage.getItem('userName'))
}

const storageUsers = getStorageUsers(),
	 userInSession = storageUsers.find(user => user.status === true);

const getSection = (item) =>
	 {
		 let categoriesWrap = document.querySelector(`#categoriesContainer`),
			 categories = document.createElement(`section`);
			 categoriesLabel = document.createElement(`h2`);
			 categoriesContainer = document.createElement(`div`);
			 
			 categories.className = `category`;
			 categories.setAttribute(`data-name`, `${item}`);
			 categoriesContainer.className = `category__container`;
			 categoriesLabel.innerHTML = `${item}`;
	 
			 categoriesWrap.append(categories);
			 categories.append(categoriesLabel);
			 categories.append(categoriesContainer);
	 
		 return document.querySelector( `section[data-name=${item}]`)
}

const btnCartFoo = (id) =>
{
	if (userInSession)
	{
		 if (localCartId.indexOf(id) !== -1) //remove from localstorage
		 {
		let localId = userInSession.shoppingCart.findIndex(i => i.id === id);
		userInSession.shoppingCart.splice(localId, 1)
		localCartId.splice(localId, 1)

		document.querySelectorAll( `button[data-id="${id}"]`).forEach(e=>e.className = `product__cart`)
		storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.shoppingCart = userInSession.shoppingCart} } )
		localStorage.setItem('userName', JSON.stringify(storageUsers));	
		headerShoppingCartCount.innerHTML = userInSession.shoppingCart.length;
		 }
		 else //add in localstorage
		{
		userInSession.shoppingCart.push({id,count: 1})
		localCartId.push(id)

		document.querySelectorAll( `button[data-id="${id}"]`).forEach(e=>e.className = `product__cart product__cart--in`)
		storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.shoppingCart = userInSession.shoppingCart} } )
		localStorage.setItem('userName', JSON.stringify(storageUsers));	
		headerShoppingCartCount.innerHTML = userInSession.shoppingCart.length;
		 }
	}
	else 
	{
		document.location.href = `login.html`
	}
}

const renderItems = ({id,title,img,price,sale,salePercent,categories}) =>
	 {
		 categories.forEach( item => {
		 let wrap = document.querySelector( `section[data-name=${item}]`) ? document.querySelector( `section[data-name=${item}]`) : getSection (item),
			 container = wrap.querySelector(`.category__container`),
			 product = document.createElement (`div`),
			 btnItem = document.createElement (`button`),
			 ImgLike = document.createElement (`img`),
			 ImgProd = document.createElement (`img`),
			 nameItem = document.createElement (`p`);
	 
			 if (sale){
				 saleItem = document.createElement (`div`);
				 saleOld = document.createElement (`span`);
				 saleProc = document.createElement (`span`);
				 saleItem.className = `product__sale`;
				 saleOld.className = `product__sale--old`;
				 saleProc.className = `product__sale--percent`;
				 saleOld.innerHTML =`${price}`;
				 saleProc.innerHTML = `-${salePercent}%`;
				 }
	 
		 let	priceItem = document.createElement (`div`),
			 btnCart = document.createElement (`button`);
			 priceTotal = document.createElement (`div`);
	 
			 product.className = `product`;
			 btnItem.className = `product__favourite`;
			 ImgProd.className = `product__img`;
			 nameItem.className = `product__title`;
			 priceItem.className = `product__info`;
			 btnCart.className = `product__cart`;
			 btnCart.setAttribute(`data-id`, `${id}`);
	 
			 userInSession && localCartId.indexOf(id) !== -1 && btnCart.classList.add ("product__cart--in");
			 userInSession && localOrderId.indexOf(id) !== -1 && btnCart.classList.add ("product__cart--ordered");
	 
			 btnCart.innerHTML = `<img src="images/shopping-cart.png" alt="shopping cart" height="20"><p>${id}</p>`
			 
			 btnCart.addEventListener(`click`, e => { 
				 e.preventDefault(); 
				 btnCartFoo(id);
			 });
	 
			 priceTotal.className = `product__price`;
	 
			 ImgLike.setAttribute(`src`, `images/${userInSession && userInSession.favourites.indexOf(id) !== -1 
														 ? `product__favourite--true` 
														 : `product__favourite`}.png`);		
			 ImgLike.setAttribute(`alt`, `favourite`);
			 ImgLike.setAttribute(`data-id`, `${id}`);
			 ImgLike.setAttribute(`height`, `20`);
	 
			 ImgProd.setAttribute(`src`, `images/products/${img}.png`);
			 ImgProd.setAttribute(`alt`, `${img}`);
			 ImgProd.setAttribute(`height`, `80`);
	 
			 btnItem.addEventListener(`click`, e => { 
				 e.preventDefault(); 
				 if (userInSession)
				 {
					 if (userInSession.favourites.indexOf(id) !== -1)
					 {
						 document.querySelectorAll( `img[data-id="${id}"]`).forEach(e=>e.setAttribute(`src`, `images/product__favourite.png`))
						 userInSession.favourites.splice(userInSession.favourites.indexOf(id), 1);
	 
						 storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.favourites = userInSession.favourites} } )
						 localStorage.setItem('userName', JSON.stringify(storageUsers));	
						 headerFavouritesCount.innerHTML = userInSession.favourites.length;
					 }
					 else
					 {
						 document.querySelectorAll( `img[data-id="${id}"]`).forEach(e=>e.setAttribute(`src`, `images/product__favourite--true.png`));
						 userInSession.favourites.push(id);
	 
						 storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.favourites = userInSession.favourites} } )
						 localStorage.setItem('userName', JSON.stringify(storageUsers));	
						 headerFavouritesCount.innerHTML = userInSession.favourites.length;
					 }
				 }
				 else 
				 {
					 document.location.href = `login.html`
				 }
			 });
		 
			 nameItem.innerHTML =`${title}`
			 priceTotal.innerHTML = `$${ sale ? price-(price*(salePercent/100)) : price }`
	 
			 container.append(product);
			 product.append(btnItem);
			 btnItem.append(ImgLike);
			 product.append(ImgProd);
			 product.append(nameItem);
			 if (sale){
				 product.append(saleItem);
				 saleItem.append(saleOld);
				 saleItem.append(saleProc);
				 }
			 product.append(priceItem);
			 priceItem.append(priceTotal);
			 priceItem.append(btnCart);
		 })
}	 

// FOR login.html PAGE ++
if (document.querySelector(`#LoginForm`))
{
	const LoginForm = document.querySelector(`#LoginForm`);
	LoginForm.addEventListener(`submit`, e => { 
		e.preventDefault(); 
		let email = e.target.querySelector(`input[data-name="email"]`).value.toLowerCase(),
			password = e.target.querySelector(`input[data-name="password"]`).value,
			rememberUser = storageUsers.find(user => user.email === email);
		if (rememberUser && rememberUser.password === password)
			{
				storageUsers.forEach(item =>{ if(item.email == email) {item.status = true} } )
				localStorage.setItem('userName', JSON.stringify(storageUsers));	
				document.location.href = `favourites.html`;
			}
		else if(!rememberUser){
			let err = e.target.querySelector(`.error`);
			err.classList.add("active");
			err.innerHTML = `Invalid email 🥵`;
			setTimeout(()=>{err.classList.remove("active")}, 2000);
		}
		else {
			let err = e.target.querySelector(`.error`);
			err.classList.add("active");
			err.innerHTML = `Invalid password 🥵`;
			setTimeout(()=>{err.classList.remove("active")}, 2000);
		}
	});
}

//FOR Registor form ++
if (document.querySelector(`#RegistrationForm`))
{
	const RegistrationForm = document.querySelector(`#RegistrationForm`);
	RegistrationForm.addEventListener(`submit`, e => { 
		e.preventDefault(); 
		let name = e.target.querySelector(`input[data-name="name"]`).value,
			email = e.target.querySelector(`input[data-name="email"]`).value.toLowerCase(),
			password = e.target.querySelector(`input[data-name="password"]`).value.trim(),
			passwordVerify = e.target.querySelector(`input[data-name="passwordVerify"]`).value.trim(),
			rememberUser = storageUsers.find(user => user.email === email);
		if ( !password || password !== passwordVerify ){
				let err = e.target.querySelector(`.error`);
				err.classList.add("active");
				err.innerHTML = `Password not matches! or Empty!  🥵`;
				setTimeout(()=>{err.classList.remove("active")}, 2000);
			}	
		else if(rememberUser && rememberUser.email == email){
			let err = e.target.querySelector(`.error`);
			err.classList.add("active");
			err.innerHTML = `User with email ${email} already exist! 🥵`;
			setTimeout(()=>{err.classList.remove("active")}, 2000);
		}
		else {
			let newUser = { name: name, email: email, password: password, status: true, favourites: [], orders: [], shoppingCart: []};
			storageUsers.push(newUser);
			localStorage.setItem('userName', JSON.stringify(storageUsers));	
			document.location.href = `favourites.html`;
		}
	});
}

//FOR HEADER page
if (document.querySelector(`#headerUser`))
{
	const headerUser = document.querySelector(`#headerUser`);
	const headerFavourites = document.querySelector(`#headerFavourites`);
	const headerShoppingCart = document.querySelector(`#headerShoppingCart`);
	const headerLogout = document.querySelector(`#headerLogout`);
	if (userInSession)
	{
		localCartId = userInSession.shoppingCart.map ( item => item.id );
		localOrderId = userInSession.orders.map ( item => item.id );
		
		headerUser.innerHTML = userInSession.name;
		headerUser.href = `account.html`;
		headerFavourites.href = `favourites.html`;

		const headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);
		headerFavouritesCount.innerHTML = userInSession.favourites.length;

		headerShoppingCart.href = `shoppingCart.html`;
		const headerShoppingCartCount = document.querySelector(`#headerShoppingCartCount`);
		headerShoppingCartCount.innerHTML = userInSession.shoppingCart.length;
		headerLogout.classList.add(`active`);
	}
	headerLogout.addEventListener(`click`, e => { 
		e.preventDefault(); 
		userInSession.status = false;
		localStorage.setItem('userName', JSON.stringify(storageUsers));	
		document.location.href = `index.html`;
	});
console.log (`find:`, userInSession)

}

//FOR info page
if (document.querySelector(`#userInfoName`))
{
	const userInfoName = document.querySelector(`#userInfoName`);
	userInfoName.value = userInSession.name;
	const userInfoEmail = document.querySelector(`#userInfoEmail`); 
	userInfoEmail.innerHTML = userInSession.email;
}

//FOR info page -rename
if(document.querySelector(`#userInfo`))
{
	const userInfo = document.querySelector(`#userInfo`);
	userInfo.addEventListener(`submit`, e => { 
		e.preventDefault();
		let name = userInfoName.value.trim();
		name ? userInSession.name = name : userInfoName.value ;	
			//check for empty string
		localStorage.setItem(`userName`, JSON.stringify(storageUsers));
		location.reload();
	})
}

//FOR info page -delete BTN
if (document.querySelector(`#deleteAcc`))
{
	const deleteAcc = document.querySelector(`#deleteAcc`);
	deleteAcc.addEventListener(`click`, e => { 
		e.preventDefault();
		let deleteIndex;
		storageUsers.forEach((item,i) => item.email == userInSession.email ? deleteIndex = i : '' );
		storageUsers.splice(deleteIndex, 1);		
		localStorage.setItem('userName', JSON.stringify(storageUsers));	
		document.location.href = `index.html`;
	});
}

//FOR index page
if (document.querySelector(`#categoriesContainer`))
{
	PRODUCTS.forEach(item => renderItems(item))
}

//FOR favourites.html  page
if (document.querySelector(`#favouriteTable`))
{
	const favouriteTable = document.querySelector(`#favouriteTable`);
	let caption = document.createElement(`caption`),
		thead =  document.createElement(`thead`);
		tbody =  document.createElement(`tbody`);
	
	thead.innerHTML = `<tr><th>Item Description</th><th>Price</th><th>Sale</th><th>Total</th><th>Action</th></tr>`;
	caption.innerHTML = userInSession.favourites.length>0 ? `Favourite Items` : ` NO Favourite Items!`;
	
	favouriteTable.append(caption);
	favouriteTable.append(thead);
	favouriteTable.append(tbody);
	
	if(userInSession.favourites.length>0) {
		userInSession.favourites.forEach(item => 
		{let favoriteItem = PRODUCTS.find(i => i.id === item),
			tr =  document.createElement(`tr`),
			tdItem = document.createElement(`td`),
			tdPrice = document.createElement(`td`),
			tdSale = document.createElement(`td`),
			tdTotal = document.createElement(`td`),
			tdLike = document.createElement(`td`),
			btnLike = document.createElement (`button`),
			ImgLike = document.createElement (`img`);
			btnCart = document.createElement (`button`),

			btnLike.className = `item__favourite`;
			btnCart.className = `product__cart`;
			localCartId.indexOf(favoriteItem.id) !== -1 && btnCart.classList.add ("product__cart--in");
			btnCart.setAttribute(`data-id`, `${favoriteItem.id}`);
			ImgLike.setAttribute(`src`, `images/product__favourite--true.png`);
			ImgLike.setAttribute(`alt`, `favourite`);
			ImgLike.setAttribute(`height`, `20`);

			btnCart.innerHTML='<img src="images/shopping-cart.png" alt="shopping cart" height="20">';
			btnCart.addEventListener(`click`, e => { 
				e.preventDefault(); 
				btnCartFoo(favoriteItem.id);
			});

			btnLike.addEventListener(`click`, e => { 
				e.preventDefault(); 
				userInSession.favourites.splice(userInSession.favourites.indexOf(item), 1);
				storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.favourites = userInSession.favourites} } )
				localStorage.setItem('userName', JSON.stringify(storageUsers));	

				headerFavouritesCount.innerHTML = userInSession.favourites.length;
				tdItem.parentNode.parentNode.removeChild(tdItem.parentNode);
				caption.innerHTML = userInSession.favourites.length>0 ? `Favourite Items` : ` NO Favourite Items!`;	
			});

			tdItem.innerHTML = `<div class="item__info"><img src="images/products/${favoriteItem.img}.png" alt="${favoriteItem.title}" height="100">
									<div><p class="item__info--title">${favoriteItem.title}</p></div>
								</div>`			
			tdPrice.innerHTML = `$${favoriteItem.price}`
			tdSale.innerHTML = favoriteItem.sale ? `<td><span class="item__sale">- ${favoriteItem.salePercent}%</span></td>` :`-`
			tdTotal.innerHTML = `$${ favoriteItem.sale ? favoriteItem.price-(favoriteItem.price*(favoriteItem.salePercent/100)) : favoriteItem.price }`

			tbody.append(tr);
			tr.append(tdItem);
			tr.append(tdPrice);
			tr.append(tdSale);
			tr.append(tdTotal);
			tr.append(tdLike);
			tdLike.append(btnCart);

			tdLike.append(btnLike);
			btnLike.append(ImgLike);
		}
	) }
}

//FOR account.html page
if(document.querySelector(`#orderTable`))
{
	const OrderTable = document.querySelector(`#orderTable`),
			caption = document.createElement(`caption`),
			thead =  document.createElement(`thead`),
			tbody =  document.createElement(`tbody`);
	
	thead.innerHTML = `<tr><th>Item Description</th><th>Price</th><th>Sale</th><th>Quantity</th><th>Total</th></tr>`;
	caption.innerHTML = userInSession.orders.length>0 ? `Ordered Items` : ` NO Ordered Items!`;
	
	OrderTable.append(caption);
	OrderTable.append(thead);
	OrderTable.append(tbody);
	
if(userInSession.orders.length>0) 
	{
		userInSession.orders.forEach(item => 
		{
			let ordersItem = PRODUCTS.find(i => i.id === item.id),
			tr =  document.createElement(`tr`),
			tdItem = document.createElement(`td`),
			tdPrice = document.createElement(`td`),
			tdQuantity = document.createElement(`td`),
			tdSale = document.createElement(`td`),
			tdTotal = document.createElement(`td`);
		
			tdItem.innerHTML = `<div class="item__info">
					<img src="images/products/${ordersItem.img}.png" alt="${ordersItem.title}" height="100">
					<div><p class="item__info--title">${ordersItem.title}</p></div>
								</div>`;		
			tdPrice.innerHTML = `$${ordersItem.price}`;
			tdQuantity.innerHTML = `${item.count}`;
			tdSale.innerHTML = ordersItem.sale 
				? `<td><span class="item__sale">- ${ordersItem.salePercent}%</span></td>` 
				:`-`;
			
			tdTotal.innerHTML = `$${ ordersItem.sale 
				? (ordersItem.price-(ordersItem.price*(ordersItem.salePercent/100)))*item.count 
				: ordersItem.price*item.count}`

			tbody.append(tr);
			tr.append(tdItem);
			tr.append(tdPrice);
			tr.append(tdSale);
			tr.append(tdQuantity);
			tr.append(tdTotal);
		}
	)};
};

//FOR shoppingCart.html page
if(document.querySelector(`#shoppingCartTable`))
{
	const shoppinCartTable = document.querySelector(`#shoppingCartTable`),
			caption = document.createElement(`caption`),
			thead =  document.createElement(`thead`),
			tbody =  document.createElement(`tbody`),
			totalPrice = [];
	
	thead.innerHTML = `<tr><th>Item Description</th><th>Price</th><th>Sale</th><th>Quantity</th><th>Total</th><th>Action</th></tr>`;
	caption.innerHTML = userInSession.shoppingCart.length>0 ? `Items in Shopping Cart` : ` NO Shopping Items!`;
	
	shoppinCartTable.append(caption);
	shoppinCartTable.append(thead);
	shoppinCartTable.append(tbody);

	if(userInSession.shoppingCart.length>0) {

		userInSession.shoppingCart.forEach(item => 
		{let shopItem = PRODUCTS.find(i => i.id === item.id),
			tr =  document.createElement(`tr`),
			tdItem = document.createElement(`td`),
			tdPrice = document.createElement(`td`),
			tdSale = document.createElement(`td`),
			tdQuantity = document.createElement(`td`),
			tdTotal = document.createElement(`td`),
			tdDel = document.createElement (`td`),
			btnDel = document.createElement (`button`),
			localPrice = shopItem.sale ? shopItem.price-(shopItem.price*(shopItem.salePercent/100)) : shopItem.price;

			btnDel.className = `item__remove`;
			btnDel.innerHTML='<img src="images/delete.png" alt="delete" height="20">';

			btnDel.addEventListener(`click`, e => { 
				btnCartFoo(shopItem.id)
				tdItem.parentNode.parentNode.removeChild(tdItem.parentNode);
				caption.innerHTML = userInSession.shoppingCart.length>0 
					? `Items in Shopping Cart` 
					: ` NO Shopping Items!`;
				totalPrice.splice(totalPrice.indexOf(localPrice),1);
				document.querySelector(`#orderSummaryTotal`).innerHTML =`$${totalPrice.length>0 ? totalPrice.reduce((a, b) => {return a + b;}) : 0}`
			});

			tdItem.innerHTML = `<div class="item__info"><img src="images/products/${shopItem.img}.png" alt="${shopItem.title}" height="100">
									<div><p class="item__info--title">${shopItem.title}</p></div>
								</div>`			
			tdPrice.innerHTML = `$${shopItem.price}`
			tdSale.innerHTML = shopItem.sale 
				? `<td><span class="item__sale">- ${shopItem.salePercent}%</span></td>` 
				:`-`;
			tdQuantity.innerHTML = `<td><input type="number" value="${item.count}" min="1" max="999"></td>`;
			tdTotal.innerHTML = `$${localPrice}`
			totalPrice.push(localPrice);

			tdQuantity.addEventListener(`change`, e=>{
				totalPrice.splice(totalPrice.indexOf(localPrice),1);
				item.count = Math.round(e.target.value);
				tdQuantity.innerHTML = `<td><input type="number" value="${item.count}" min="1" max="999"></td>`;
				localPrice = shopItem.sale ? (shopItem.price-(shopItem.price*(shopItem.salePercent/100)))*item.count : shopItem.price*item.count;
				totalPrice.push(localPrice);
				tdTotal.innerHTML = `$${localPrice}`
				storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.shoppingCart = userInSession.shoppingCart} } )
				localStorage.setItem('userName', JSON.stringify(storageUsers));	
				document.querySelector(`#orderSummaryTotal`).innerHTML =`$${totalPrice.length>0 ? totalPrice.reduce((a, b) => {return a + b;}) : 0}`
			})

			tbody.append(tr);
			tr.append(tdItem);
			tr.append(tdPrice);
			tr.append(tdSale);
			tr.append(tdQuantity);
			tr.append(tdTotal);
			tr.append(tdDel);
			tdDel.append(btnDel);
		})
	}
	document.querySelector(`#orderSummaryTotal`).innerHTML =`$${totalPrice.length>0 ? totalPrice.reduce((a, b) => {return a + b;}) : 0}`
};


