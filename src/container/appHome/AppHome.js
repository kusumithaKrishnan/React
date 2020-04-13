import React, {Component} from 'react';
import Header from '../../components/header';
import Names from '../../components/names';
import Burger from '../../components/burger/Burger';
class AppHome extends Component {
    render() {
        return(
            <div>
                <Header />
                <Burger />
               
            </div>
        )
    }
}

export default AppHome;