const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

function getWinnersBySportName(sportName){
    let sportWinners = [];
    for(let i=0; i<winners.length; i++){
        let winner = winners[i],
            winnerSport = winner[0];

        if(winnerSport === sportName)
            sportWinners.push(winner);
    }
    return sportWinners;
}

function getContinent(country){
    for(let i=0; i<continents.length; i++){
        if(continents[i][0] === country) return continents[i][1];
    }
}

function getFlag(country){
    for(let i=0; i<flags.length; i++){
        if(flags[i][0] === country) return flags[i][1];
    }
}

function getMedal(medal){
    for(let i=0; i<medals.length; i++){
        if(medals[i][1] === medal) return medals[i][0];
    }
}

let sportsTR = [];

for(let i=0; i<sports.length; i++){
    let Europe = [],
        Africa = [],
        Americas = [],
        Asia = [],
        Oceania = [];

    let sportIcon = sports[i][0],
        sportName = sports[i][1];

    let sportWinners = getWinnersBySportName(sportName);

    for(let i=0; i<sportWinners.length; i++){
        let winner = sportWinners[i],
            winnerMedal = winner[1],
            winnerCountry = winner[2],
            winnerContinent = getContinent(winnerCountry),
            winnerRender = `<div class="medal ${winnerMedal}">${getFlag(winnerCountry)} – ${getMedal(winnerMedal)}</div>`;
        
        switch(winnerContinent){
            case `Europe`:
                Europe.push(winnerRender);
                break;
            case `Africa`:
                Africa.push(winnerRender);
                break;
            case `The Americas`:
                Americas.push(winnerRender);
                break;
            case `Asia`:
                Asia.push(winnerRender);
                break;
            case `Oceania`:
                Oceania.push(winnerRender);
                break;
        }
    }

    sportsTR.push(`<tr>
        <td>${sportIcon}</td>
        <td>${Europe.join(``)}</td>
        <td>${Africa.join(``)}</td>
        <td>${Americas.join(``)}</td>
        <td>${Asia.join(``)}</td>
        <td>${Oceania.join(``)}</td>
    </tr>`);
}

document.write(`<table>
    <thead>
        <tr>
            <th></th>
            <th>${olympic.join(`</th><th>`)}</th>
        </tr>
    </thead>
    <tbody>
        ${sportsTR.join(``)}
    </tbody>
</table>`);