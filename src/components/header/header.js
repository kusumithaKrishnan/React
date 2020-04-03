import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
class Header extends Component {

    componentDidMount() {
        const { getNames } = this.props;
        getNames();
    }

    render() {
        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="84"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                    React and Redux 
    </Navbar.Brand>
            </Navbar>

        )
    }
}

export default Header;