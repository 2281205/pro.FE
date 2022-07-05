const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

let     list = [],
        listDone =[],
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

class UsersComponent extends React.Component{
    constructor(props){
        super(props);

        const removeUsr = setInterval(()=>{
            let cutId = Math.floor(Math.random() * this.state.localUsr.length);
            
            this.setState({
               localUsr: this.state.localUsr.slice(0, -1),
               //localUsr: this.state.localUsr.concat({id:22, name:'olegg', price:'1300'})
            });
  
            if(!this.state.localUsr.length) {clearInterval(removeUsr); console.log(`DONE!`)};
            
            console.dir(this.state.localUsr);
            console.log(cutId);
        }, 1000);
    }

    state = {
        localUsr: this.props.usr ? JSON.parse(JSON.stringify(this.props.usr)) : [],
        localUsrId: this.props.usrId ? JSON.parse(JSON.stringify(this.props.usrId)) : []
    }

    render(){
        return  <tbody>
            {this.state.localUsr.map((user) =><tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.price}</td>
                                                    </tr>)}
                </tbody>}
}

const App = 
<table>
    <thead>
            {renderList}
    </thead>
    <UsersComponent usr={list} usrId={listDone}/>
</table>

root.render(App);