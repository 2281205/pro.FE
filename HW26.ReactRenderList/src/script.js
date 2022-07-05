const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

let     list = [],
        listDone =[],
        styleTable = {},
        styleUser = {
            fontWeight: "bold",
            color: "darkgreen",
        },     
        renderList = <tr><th>ID</th><th>Name</th><th>Price</th></tr>;

// render random Arr with obj {id: name: price:}
for (let i=1; i<=20; i++)
{
    let obj = {
                id: i,
                price: Math.floor(Math.random() * 5000),
                name: Math.random().toString(36).slice(2)
              };
    list.push(obj);
    listDone.push(obj.id);
}

let indexDone=listDone.length;

class UsersComponent extends React.Component{
    constructor(props)
    {
        super(props);

        const removeUsr = setInterval(()=>{
            let cutId = Math.round(Math.random() * listDone.length);
//FOR DEBUG IN LOG
            console.log(cutId)
            console.log(listDone)

           if(!isNaN(listDone[cutId]))
            {
                this.state.localUsr[cutId].style = styleUser;
                listDone[cutId]="Done";
                indexDone--;
            }

           if(!((this.state.localUsr.length)/2-indexDone))
            {
               styleTable.halfPass=true;
               console.log(`50% DONE!`);  
            }
            
            if(!indexDone)
            {
                clearInterval(removeUsr); 
                console.log(`DONE!`);  
                styleTable.borderWidth=20;
            };
            
            this.setState({});
        }, 500);
    }

    state = {
        localUsr: this.props.usr ? JSON.parse(JSON.stringify(this.props.usr)) : [],
        localUsrId: this.props.usrId ? JSON.parse(JSON.stringify(this.props.usrId)) : []
    }

    render(){
        return  <table style= {styleTable.borderWidth ? styleTable : undefined } className={styleTable.halfPass ? "halfPass" : undefined} >
        <thead>
                {renderList}
        </thead>
        
        <tbody>
            {this.state.localUsr.map((user) =><tr style= {user.style ? styleUser : undefined } key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.price}</td>
                                                    </tr>)}
        </tbody>
        </table>
    }
}

const App = <UsersComponent usr={list} usrId={listDone}/>

root.render(App);