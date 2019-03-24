"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const root = document.getElementById('root');
class Test extends React.Component {
    render() {
        return React.createElement("div", null, this.props.hello);
    }
}
ReactDOM.render(React.createElement(Test, { hello: 'world' }), root);
//# sourceMappingURL=app.js.map