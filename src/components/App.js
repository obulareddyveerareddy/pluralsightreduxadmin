import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Header></Header>
                <hr/>
                <div>
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        )

    }

}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;