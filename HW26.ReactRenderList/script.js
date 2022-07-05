var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var list = [],
    listDone = [],
    styleTable = {},
    styleUser = {
    fontWeight: "bold",
    color: "darkgreen"
},
    renderList = React.createElement(
    "tr",
    null,
    React.createElement(
        "th",
        null,
        "ID"
    ),
    React.createElement(
        "th",
        null,
        "Name"
    ),
    React.createElement(
        "th",
        null,
        "Price"
    )
);

// render random Arr with obj {id: name: price:}
for (var i = 1; i <= 20; i++) {
    var obj = {
        id: i,
        price: Math.floor(Math.random() * 5000),
        name: Math.random().toString(36).slice(2)
    };
    list.push(obj);
    listDone.push(obj.id);
}

var indexDone = listDone.length;

var UsersComponent = function (_React$Component) {
    _inherits(UsersComponent, _React$Component);

    function UsersComponent(props) {
        _classCallCheck(this, UsersComponent);

        var _this = _possibleConstructorReturn(this, (UsersComponent.__proto__ || Object.getPrototypeOf(UsersComponent)).call(this, props));

        _this.state = {
            localUsr: _this.props.usr ? JSON.parse(JSON.stringify(_this.props.usr)) : [],
            localUsrId: _this.props.usrId ? JSON.parse(JSON.stringify(_this.props.usrId)) : []
        };


        var removeUsr = setInterval(function () {
            var cutId = Math.round(Math.random() * listDone.length);
            //FOR DEBUG IN LOG
            console.log(cutId);
            console.log(listDone);

            if (!isNaN(listDone[cutId])) {
                _this.state.localUsr[cutId].style = styleUser;
                listDone[cutId] = "Done";
                indexDone--;
            }

            if (!(_this.state.localUsr.length / 2 - indexDone)) {
                styleTable.halfPass = true;
                console.log("50% DONE!");
            }

            if (!indexDone) {
                clearInterval(removeUsr);
                console.log("DONE!");
                styleTable.borderWidth = 20;
            };

            _this.setState({});
        }, 500);
        return _this;
    }

    _createClass(UsersComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { style: styleTable.borderWidth ? styleTable : undefined, className: styleTable.halfPass ? "halfPass" : undefined },
                React.createElement(
                    "thead",
                    null,
                    renderList
                ),
                React.createElement(
                    "tbody",
                    null,
                    this.state.localUsr.map(function (user) {
                        return React.createElement(
                            "tr",
                            { style: user.style ? styleUser : undefined, key: user.id },
                            React.createElement(
                                "td",
                                null,
                                user.id
                            ),
                            React.createElement(
                                "td",
                                null,
                                user.name
                            ),
                            React.createElement(
                                "td",
                                null,
                                user.price
                            )
                        );
                    })
                )
            );
        }
    }]);

    return UsersComponent;
}(React.Component);

var App = React.createElement(UsersComponent, { usr: list, usrId: listDone });

root.render(App);