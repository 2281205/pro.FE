const astrologicalSigns = {
    Aries: {
        startDate: {
            month: `March`,
            day: 21
        },
        endDate: {
            month: `April`,
            day: 20
        }
    },
    Taurus: {
        startDate: {
            month: `April`,
            day: 21
        },
        endDate: {
            month: `May`,
            day: 21
        }
    },
    Gemini: {
        startDate: {
            month: `May`,
            day: 22
        },
        endDate: {
            month: `June`,
            day: 21
        }
    },
    Cancer: {
        startDate: {
            month: `June`,
            day: 22
        },
        endDate: {
            month: `July`,
            day: 22
        }
    },
    Leo: {
        startDate: {
            month: `July`,
            day: 23
        },
        endDate: {
            month: `August`,
            day: 21
        }
    },
    Virgo: {
        startDate: {
            month: `August`,
            day: 22
        },
        endDate: {
            month: `September`,
            day: 23
        }
    },
    Libra: {
        startDate: {
            month: `September`,
            day: 24
        },
        endDate: {
            month: `October`,
            day: 23
        }
    },
    Scorpio: {
        startDate: {
            month: `October`,
            day: 24
        },
        endDate: {
            month: `November`,
            day: 22
        }
    },
    Sagittarius: {
        startDate: {
            month: `November`,
            day: 23
        },
        endDate: {
            month: `December`,
            day: 22
        }
    },
    Capricorn: {
        startDate: {
            month: `December`,
            day: 23
        },
        endDate: {
            month: `January`,
            day: 20
        }
    },
    Aquarius: {
        startDate: {
            month: `January`,
            day: 21
        },
        endDate: {
            month: `February`,
            day: 19
        }
    },
    Pisces: {
        startDate: {
            month: `February`,
            day: 20
        },
        endDate: {
            month: `March`,
            day: 20
        }
    }
}

const users = [
    {
        name: 'Larry Page',
        dayOfBirth: 26,
        monthOfBirth: `March`
    },
    {
        name: 'Bill Gates',
        dayOfBirth: 28,
        monthOfBirth: `October`
    },
    {
        name: 'Mark Zuckerberg',
        dayOfBirth: 14,
        monthOfBirth: `May`
    }
];

class Time{
    static get date(){
        return new Date();
    }

    static get day(){
        return new Date().getUTCDate();
    }

    static get month(){
        return new Date().getMonth();
    }

    static get monthNames(){
        return [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    }

    static monthName(month=Time.month){
        return Time.monthNames[month];
    }
}

class Astrological extends Time{
    constructor(){
        super();
    }

    static astrologicalSign(day=Time.day, month=Time.monthName()){
        for(let key in astrologicalSigns){
            let sign = astrologicalSigns[key];
            if(sign.startDate.month === month && sign.startDate.day<=day){
                return key;
            } else if(sign.endDate.month === month && sign.endDate.day>day){
                return key;
            }
        }
    }
}

class Human extends Astrological{
    constructor(user){
        super();
        for(let key in user){
            this[key] = user[key];
        }
    }

    astrologicalSign(){
        return `${this.name} is ${Astrological.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}.`;
    }
}

console.log(Time.monthName());
console.log(Time.monthName(3));

console.log(Astrological.astrologicalSign(29,`September`));
console.log(Astrological.astrologicalSign());

users
    .map(user => new Human(user))
    .forEach(user => console.log(user.astrologicalSign()));