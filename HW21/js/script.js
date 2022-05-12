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
		favourites: [1, 7],
		status: false
	}
];

 //localStorage.setItem('userName', 10);

const getStorageUsers = () => {
    localStorage.getItem('userName') 	? JSON.parse(localStorage.getItem('userName'))
                                    	: localStorage.setItem('userName', JSON.stringify(USERS));
    return JSON.parse(localStorage.getItem('userName'))
}
//console.log(getStorageUsers());

//[{name: 'Ivan', email: 'ivan@gmail.com', password: '123', favourites: Array(3), status: false},
//{name: 'Oksana', email: 'oksana@gmail.com', password: '123', favourites: Array(2), status: false}]

const storageUsers = getStorageUsers();
const userInSession = storageUsers.find(user => user.status === true);
console.log(storageUsers)
console.log(userInSession)

// FOR login.html PAGE ++
if (document.querySelector(`#LoginForm`))
{
	console.log (`IM IN LOGIN PAGE`)
	const LoginForm = document.querySelector(`#LoginForm`);
	LoginForm.addEventListener(`submit`, e => { 
		e.preventDefault(); 
		let email = e.target.querySelector(`input[data-name="email"]`).value.toLowerCase(),
			password = e.target.querySelector(`input[data-name="password"]`).value,
			rememberUser = storageUsers.find(user => user.email === email);
		if (rememberUser && rememberUser.password === password)
			{
				console.log(`LOGIN IS ${rememberUser.email === email} AND PASS ${ rememberUser.password === password }`)
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
	console.log (`IM IN REGISTOR PAGE`)
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

//FOR index page
if (document.querySelector(`#categoriesContainer`))
{
	console.log (`IM IN INDEX PAGE`)
}


//FOR favourites.html  page
if (userInSession)
{
	const favouriteTable = document.querySelector(`#favouriteTable`);
	console.log (`IM IN favourites.html  page`)
}
