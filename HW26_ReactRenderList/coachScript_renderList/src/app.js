const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const getRandomInt = (max, min=0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const capitalize = word => word[0].toUpperCase()+word.slice(1).toLowerCase();

class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            animals: [
                {type: `cat`, icon: `🐱`},
                {type: `dog`, icon: `🐶`},
                {type: `fox`, icon: `🦊`},
                {type: `bear`, icon: `🐻`},
                {type: `lion`, icon: `🦁`},
                {type: `cat`, icon: `🐸`},
                {type: `unicorn`, icon: `🦄`}
            ],
            selectedTR: [],
            border: ``
        }

        this.state.nonSelectedTR = this.state.animals.map((item,index)=>index);

        const fillTR = setInterval(()=>{
            let trID = getRandomInt(this.state.nonSelectedTR.length),
                trElement = this.state.nonSelectedTR[trID];
            
            this.state.nonSelectedTR.splice(trID,1);
            this.state.selectedTR.push(trElement);

            this.setState({
                selectedTR: this.state.selectedTR,
                nonSelectedTR: this.state.nonSelectedTR
            });

            console.log(trElement, this.state.nonSelectedTR, this.state.selectedTR);

            if(this.state.selectedTR.length === Math.ceil(this.state.animals.length/2)){
                console.log(`Half!`);
                this.state.border = `10px solid #4caf50`;
            }

            if(!this.state.nonSelectedTR.length){
                this.state.border = `20px solid #4caf50`;
                clearInterval(fillTR);
            }
        },1000);
    }

    render(){
        return <table style={{border: this.state.border}}>
            <tbody>
                {
                    this.state.animals.map((animal,index) => 
                        <tr className={this.state.selectedTR.indexOf(index) !== -1 ? `selected` : undefined} key={`animal_`+index}>
                            {Object.keys(animal).map(key =><td key={key}>{capitalize(animal[key])}</td>)}
                        </tr>)
                }
            </tbody>
        </table>
    }
}

root.render(<Table/>);