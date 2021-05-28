import {connect} from 'react-redux';
import Home from '../screens/Home';

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
