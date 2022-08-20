TRS = [];
alphabet = `abcdefgh`;
figures = [`rook`,`horse`,`bishop`,`queen`,`king`,`bishop`,`horse`,`rook`];

for(trIndex=9; trIndex>=0; trIndex--){

	value = '';

	color = trIndex === 1 || trIndex === 2 ? `black` : `white`;

	TDS = [];
	for(tdIndex=0; tdIndex<=9; tdIndex++){
		
		if(trIndex>0 && trIndex<9){
			if(tdIndex === 0 || tdIndex === 9){
				value = trIndex;
			} else{
				value = ``
			}
		} else{
			if(tdIndex>0 && tdIndex<9){
				value = alphabet[tdIndex-1];
			} else{
				value = '';
			}
		}

		if(trIndex === 2 || trIndex===7){
			if(tdIndex>0 && tdIndex<9){
				value = `<img src="images/chess/${color}/pawn.svg" width="40" height="40">`;
			}
		}

		if(trIndex === 1 || trIndex===8){
			if(tdIndex>0 && tdIndex<9){
				value = `<img src="images/chess/${color}/${figures[tdIndex-1]}.svg" width="40" height="40">`;
			}
		}

		TDS[TDS.length] = `<td>${value}</td>`;
	}

	TRS[TRS.length] = `<tr>${TDS.join('')}</tr>`;
}

console.log(TRS);


document.write(`<table>${TRS.join('')}</table>`);