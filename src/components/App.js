import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Header></Header>
                <div>
                    {this.props.children}
                </div>
            </div>
        )

    }

}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;