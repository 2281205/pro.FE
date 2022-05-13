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
		status: false
	},
	{
		name: 'Oksana',
		email: 'oksana@gmail.com',
		password: '123',
		favourites: [1, 2, 3, 5],
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
//console.log(`LOGIN IS ${rememberUser.email === email} AND PASS ${ rememberUser.password === password }`)
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
			let newUser = { name: name, email: email, password: password, status: true, favourites: [] };
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
	const headerLogout = document.querySelector(`#headerLogout`);
	if (userInSession)
	{
		headerUser.innerHTML = userInSession.name;
		headerUser.href = `favourites.html`;
		headerFavourites.href = `favourites.html`;
		const headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);
		headerFavouritesCount.innerHTML = userInSession.favourites.length;
		headerLogout.classList.add(`active`);
	}
	headerLogout.addEventListener(`click`, e => { 
		e.preventDefault(); 
	//let userInSession = storageUsers.find(user => user.status === true);
		userInSession.status = false;
		localStorage.setItem('userName', JSON.stringify(storageUsers));	
		document.location.href = `index.html`;
	});
console.log (`find:`, userInSession)
}

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
		priceItem = document.createElement (`div`);
		priceTotal = document.createElement (`div`);

		product.className = `product`;
		btnItem.className = `product__favourite`;
		ImgProd.className = `product__img`;
		nameItem.className = `product__title`;
		priceItem.className = `product__info`;
		priceTotal.className = `product__price`;

		ImgLike.setAttribute(`src`, `images/${userInSession && userInSession.favourites.indexOf(id) !== -1 
													? `product__favourite--true` 
													: `product__favourite`}.png`);		
		ImgLike.setAttribute(`alt`, `favourite`);
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
					ImgLike.setAttribute(`src`, `images/product__favourite.png`);
					userInSession.favourites.splice(userInSession.favourites.indexOf(id), 1);

					storageUsers.forEach(item =>{ if(item.email == userInSession.email) {item.favourites = userInSession.favourites} } )
					localStorage.setItem('userName', JSON.stringify(storageUsers));	
					headerFavouritesCount.innerHTML = userInSession.favourites.length;
				}
				else
				{
					ImgLike.setAttribute(`src`, `images/product__favourite--true.png`);
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
		//console.log (`click!! ${id} and name: ${title}`)
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
	})
}

// const getFavoriteItem = (item => {
// 	let favoriteItem = PRODUCTS.find(i => i.id === item);

// 	console.log (`is ID in foo ${item}`)
// 	console.log (favoriteItem)

// });

//FOR index page
if (document.querySelector(`#categoriesContainer`))
{
	PRODUCTS.forEach(item => renderItems(item))
}

//FOR favourites.html  page
if (document.querySelector(`#favouriteTable`))
{
	console.log (`IM IN favourites.html  page`)
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
			td = document.createElement(`td`);

			td.innerHTML = `<td>
								<div class="item__info">
									<img src="images/products/${favoriteItem.img}.png" alt="${favoriteItem.title}" height="100">
									<div>
										<p class="item__info--title">${favoriteItem.title}</p>
									</div>
								</div>
							</td></td>
							<td>$${favoriteItem.price}</td>`

			tbody.append(tr);
			tr.append(td);



	// console.log (`is ID in foo ${item}`)
	// console.log (favoriteItem)
}
			) }

	else {console.log (
		
		`FAVORITE IS NULL`, userInSession.favourites.length)}
	
}

	

// <!-- <tbody>
// <tr>
// 	<td><div class="item__info"><img src="images/products/cabriolet.png" alt="Cabriolet" height="100"><div><p class="item__info--title">Cabriolet</p></div></div></td>
// 	<td>$900</td>
// 	<td><span class="item__sale">- 25%</span></td>
// 	<td>$675</td>

// // 	<td>
// 		<button class="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20"></button>
// 	</td>
// </tr>