const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

let   isTrue = true,
        successClass = `success`,
        failClass = `fail`,
        list = [],
        userID =[],
        renderList = <tr><th>ID</th><th>Name</th><th>Price</th></tr>,
        users = [`Katya`, `rrrr`, `Sasha`, `Viktor`];

for (let i=1; i<=20; i++)
{
    let obj = {
                id: i,
                price: Math.floor(Math.random() * 5000),
                name: Math.random().toString(36).slice(2)
              };
    list.push(obj);

   //userID += <tr><th>{obj.id}</th><th>{obj.name}</th><th>{obj.price}</th></tr>;
}
userID = list.map(item=> `<tr><th>${item.id}</th><th>${item.name}</th><th>${item.price}</th></tr>`).join(``)
console.log(list)

const optionalText = isTrue ? 
    <span>Optional text</span> : 
    undefined;

// setTimeout(()=>{
//     users.push(`New user`);
//     console.log(users);
// },1000);

// Component + State = dynamic re-render

// Functional-component

// function UsersComponent(myProps){
//     if(myProps.friends){
//         return <ul>
//             {myProps.friends.map((user,index) => <li key={index}>{user}</li>)}
//         </ul>;
//     }
// }
//list.forEach(item => renderList += <tr><th>{item.id}</th><th>{item.name}</th><th>{item.price}</th></tr>)
//console.log(renderList);

// Class-component
class UsersComponent extends React.Component{
    constructor(props){
        super(props);

        // setTimeout(()=>{
        //     this.setState({
        //         x: this.state.x+1,
        //         dog: "Oleg",
        //         localFriends: this.state.localFriends.concat(["New friend", "Old friend"])
        //     })
        // }, 1000);

        // const removeFriend = setInterval(()=>{
        //     this.setState({
        //         localFriends: this.state.localFriends.slice(0, -1)
        //     });

        //     if(!this.state.localFriends.length) clearInterval(removeFriend);
        //     console.log(this.state.localFriends);
        // }, 1000);
    }

    state = {
        x: 10,
        dog: `Brodyaga`,
        localFriends: this.props.friends ? JSON.parse(JSON.stringify(this.props.friends)) : []
    }

    

            render(){
                return <table>
            {/* <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr> */}
            <thead>
            {renderList}
            </thead>
                    {/* <td>{this.state.x}</td>
                    <tr>{this.state.x}</tr>
                    <td>{this.state.dog}</td> */}

        <tbody>
        {userID}
        <tr>
        {/* {list.forEach(item => {
        //    <tr><th>{item.id}</th><th>{item.name}</th><th>{item.price}</th></tr>
        console.log(item.id)
        })} */}
            

            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>

        <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
        </tr>

        <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
        </tr>
        </tbody>
                    {/* {this.state.localFriends.map((user,index) => <li key={index}>{user}</li>)} */}
            </table>;
            }

//         render() 
//         {
//             const users = this.props.users;
//             const setEditUser = this.props.setEditUser;
//             const showEditModalShow = this.props.setEditModalShow;
//             const deleteCurrentUser = this.props.deleteCurrentUser;
//             const setDeleteUsers = this.props.setDeleteUsers;
           
//             return (
//              <div className="card-body">
//               <Table>
//                <thead>
//                 <tr>
//                  <th>First Name</th>
//                  <th>Last Name</th>
//                  <th>Username</th>
//                  <th>Actions</th>
//                 </tr>
//                </thead>

//                <tbody>
//                 {/* { users.USERS.map(user => <TableItem {...user} key={user.id}
//                                 setEditUser={setEditUser}
//                                 showEditModal={showEditModalShow}
//                                 deleteCurrentUser={deleteCurrentUser}
//                                 setDeleteUsers = {setDeleteUsers} />) } */}

// <tr>
//                  <th>First Name</th>
//                  <th>Last Name</th>
//                  <th>Username</th>
//                  <th>Actions</th>
//                 </tr>
//                </tbody>

//               </Table>
//              </div>
//              )
//            }
        
        


}

// function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//       <ul>
//         {numbers.map((number) =>
//           <ListItem key={number.toString()}
//                     value={number} />
//         )}
//       </ul>
//     );
//   }


 
const TableItem = ({id, name, price, setEditUser, showEditModal, deleteCurrentUser, setDeleteUsers}) => (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{username}</td>
      <td className="row">
        <Form.Check aria-label="option 1" onChange={() => setDeleteUsers(id)}/>
        <div className="col-sm-2">
          <Button variant="outline-primary"
            onClick={() => {setEditUser({id, first_name, last_name, username}); showEditModal(true); }}
            size="sm" >
          Edit
          </Button>
        </div>
        <div className="col-sm-2">
          <Button variant="outline-danger"
            onClick={() => deleteCurrentUser(id)}
            size="sm" >
          Delete
          </Button>
        </div>
      </td>
    </tr>
)

class ContentTable extends React.Component {
    render() {
      const users = this.props.users;
      const setEditUser = this.props.setEditUser;
      const showEditModalShow = this.props.setEditModalShow;
      const deleteCurrentUser = this.props.deleteCurrentUser;
      const setDeleteUsers = this.props.setDeleteUsers;
      return (
        <div className="card-body">
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { users.USERS.map(user => <TableItem {...user} key={user.id}
                                              setEditUser={setEditUser}
                                              showEditModal={showEditModalShow}
                                              deleteCurrentUser={deleteCurrentUser}
                                              setDeleteUsers = {setDeleteUsers} />) }
            </tbody>
          </Table>
        </div>
        )
    }
}




const App = <div>
    <UsersComponent friends={list}/>
    <hr />
    <ContentTable list={list[0]} />
    <hr/>
    {/* <NumberList /> */}
</div>
//userID = list.map(item => <tr><th>{item.id}</th><th>{item.name}</th><th>{item.price}</th></tr>)
//console.log(userID);


root.render(App);