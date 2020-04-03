import React, {Component} from 'react';
import Header from '../../components/header';
import Names from '../../components/names';

class AppHome extends Component {
    render() {
        return(
            <div>
                <Header />
                <Names />
               
            </div>
        )
    }
}

export default AppHome;