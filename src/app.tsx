import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root: HTMLElement = document.getElementById('root')

interface TestProps {
    hello: string;
}

class Test extends React.Component<TestProps, any>{
   public render(): JSX.Element {
        return <div>{this.props.hello}</div>
    }
}

ReactDOM.render(<Test hello={'world'} />, root);