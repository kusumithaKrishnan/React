import Header from './header';
import { connect } from 'react-redux';
import { getNames } from '../../store/data'


const mapStateToProps = (state) => {

}

const mapDispatchToProps = {
    getNames: payload => getNames(payload)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
