var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var isTrue = true,
    successClass = 'success',
    failClass = 'fail',
    list = [],
    userID = [],
    renderList = React.createElement(
    'tr',
    null,
    React.createElement(
        'th',
        null,
        'ID'
    ),
    React.createElement(
        'th',
        null,
        'Name'
    ),
    React.createElement(
        'th',
        null,
        'Price'
    )
),
    users = ['Katya', 'rrrr', 'Sasha', 'Viktor'];

for (var i = 1; i <= 20; i++) {
    var obj = {
        id: i,
        price: Math.floor(Math.random() * 5000),
        name: Math.random().toString(36).slice(2)
    };
    list.push(obj);

    //userID += <tr><th>{obj.id}</th><th>{obj.name}</th><th>{obj.price}</th></tr>;
}
userID = list.map(function (item) {
    return '<tr><th>' + item.id + '</th><th>' + item.name + '</th><th>' + item.price + '</th></tr>';
}).join('');
console.log(list);

var optionalText = isTrue ? React.createElement(
    'span',
    null,
    'Optional text'
) : undefined;

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

var UsersComponent = function (_React$Component) {
    _inherits(UsersComponent, _React$Component);

    function UsersComponent(props) {
        _classCallCheck(this, UsersComponent);

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
        var _this = _possibleConstructorReturn(this, (UsersComponent.__proto__ || Object.getPrototypeOf(UsersComponent)).call(this, props));

        _this.state = {
            x: 10,
            dog: 'Brodyaga',
            localFriends: _this.props.friends ? JSON.parse(JSON.stringify(_this.props.friends)) : []
        };
        return _this;
    }

    _createClass(UsersComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    renderList
                ),
                React.createElement(
                    'tbody',
                    null,
                    userID,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Firstname'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Lastname'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Age'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Jill'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Smith'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '50'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Eve'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Jackson'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '94'
                        )
                    )
                )
            );
        }
    }]);

    return UsersComponent;
}(React.Component);

var App = React.createElement(
    'div',
    null,
    React.createElement(UsersComponent, { friends: list }),
    React.createElement('hr', null)
);
//userID = list.map(item => <tr><th>{item.id}</th><th>{item.name}</th><th>{item.price}</th></tr>)
console.log(userID);

root.render(App);