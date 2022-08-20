price = 0;

do{
    bulka = prompt(`Hamburger or Cheeseburger`, `cheeseburger`);
    if(bulka){
        bulka = bulka.replaceAll(` `,``).toLowerCase();
        bulka = bulka[0].toUpperCase() + bulka.slice(1);
    }
} while(bulka !== `Hamburger` && bulka !== `Cheeseburger`);

switch(bulka){
    case `Hamburger`:
        price += 10;
        break;
    case `Cheeseburger`:
        price += 15;
        break;
}

if(bulka === `Cheeseburger`){
    doubleCheese = confirm(`Would you like double cheese?`);
    if(doubleCheese)
        price += 5;
}

potato = confirm(`Would you like potato?`);
if(potato){
    potatoSize = prompt(`Choose potato size: small/middle/big`, `small`);
    if(potatoSize)
        potatoSize = potatoSize.replaceAll(` `,``).toLowerCase();
    
    switch(potatoSize){
        case `middle`:
            price += 15;
            break;
        case `big`:
            price += 20;
            break;
        default:
            potatoSize = `small`;
            price += 10;
            break;
    }
}

sauceQ = confirm(`Would you like sauce?`);
if(sauceQ){
    sauce = prompt(`Choose sauce: ketchup/mayonnaise`, `ketchup`);
    if(sauce)
        sauce = sauce.replaceAll(` `,``).toLowerCase();

    if(sauce !== `mayonnaise`)
        sauce = `ketchup`;
    
    price += 10;
}

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${bulka}</li>
		${potato ? `<li>Potato 🍟: ${potatoSize}</li>` : ``}
		${sauceQ ? `<li>Sauce 🧂: ${sauce}</li>` : ``}
	</ul>

	<p>Price: ${price}</p>
`);