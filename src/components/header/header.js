import React, {Component} from 'react';
import logo from '../../images/logo.png'
class Header extends Component {

    componentDidMount(){
        const { getNames } = this.props;
        getNames();
    }

    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand">
                        <img src={logo} alt="logo" className="app-logo" />
                    </a>
                    <div className="app-title">
                        Rapid Quote Order Management
            </div>
                </nav>
            </header>
        )
    }
}

export default Header;