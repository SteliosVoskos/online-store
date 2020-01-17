import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

const mapStateToProps = ({ forms }) => ({
    name: forms.firstName
});

export default connect(mapStateToProps)(Home);