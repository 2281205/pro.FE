var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var getRandomInt = function getRandomInt(max) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

var capitalize = function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

        _this.state = {
            animals: [{ type: 'cat', icon: '\uD83D\uDC31' }, { type: 'dog', icon: '\uD83D\uDC36' }, { type: 'fox', icon: '\uD83E\uDD8A' }, { type: 'bear', icon: '\uD83D\uDC3B' }, { type: 'lion', icon: '\uD83E\uDD81' }, { type: 'cat', icon: '\uD83D\uDC38' }, { type: 'unicorn', icon: '\uD83E\uDD84' }],
            selectedTR: [],
            border: ''
        };

        _this.state.nonSelectedTR = _this.state.animals.map(function (item, index) {
            return index;
        });

        var fillTR = setInterval(function () {
            var trID = getRandomInt(_this.state.nonSelectedTR.length),
                trElement = _this.state.nonSelectedTR[trID];

            _this.state.nonSelectedTR.splice(trID, 1);
            _this.state.selectedTR.push(trElement);

            _this.setState({
                selectedTR: _this.state.selectedTR,
                nonSelectedTR: _this.state.nonSelectedTR
            });

            console.log(trElement, _this.state.nonSelectedTR, _this.state.selectedTR);

            if (_this.state.selectedTR.length === Math.ceil(_this.state.animals.length / 2)) {
                console.log('Half!');
                _this.state.border = '10px solid #4caf50';
            }

            if (!_this.state.nonSelectedTR.length) {
                _this.state.border = '20px solid #4caf50';
                clearInterval(fillTR);
            }
        }, 1000);
        return _this;
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'table',
                { style: { border: this.state.border } },
                React.createElement(
                    'tbody',
                    null,
                    this.state.animals.map(function (animal, index) {
                        return React.createElement(
                            'tr',
                            { className: _this2.state.selectedTR.indexOf(index) !== -1 ? 'selected' : undefined, key: 'animal_' + index },
                            Object.keys(animal).map(function (key) {
                                return React.createElement(
                                    'td',
                                    { key: key },
                                    capitalize(animal[key])
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return Table;
}(React.Component);

root.render(React.createElement(Table, null));