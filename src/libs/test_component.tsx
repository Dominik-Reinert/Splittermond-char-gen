

import * as React from 'react';

interface TestProps {
    hello: string;
}
    class Test extends React.Component<TestProps, any>{
    public render(): JSX.Element {
            return <div>{this.props.hello}</div>
        }
    }
