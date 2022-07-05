const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

let     list = [],
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
}

class UsersComponent extends React.Component{
    constructor(props){
        super(props);
        console.dir(this)
    }

    render(){
        return <tr>
            <td>{this.props.usr.id}</td>
            <td>{this.props.usr.name}</td>
            <td>{this.props.usr.price}</td>
        </tr>}
}

const App = 
<table>
    <thead>
            {renderList}
    </thead>

    <tbody>
    <UsersComponent usr={list[0]}/>
    <UsersComponent usr={list[1]}/>
    <UsersComponent usr={list[2]}/>
    <UsersComponent usr={list[3]}/>
    <UsersComponent usr={list[4]}/>
    <UsersComponent usr={list[5]}/>
    </tbody>
</table>

root.render(App);