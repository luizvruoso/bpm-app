import {connect} from 'react-redux';
import Login from '../screens/Login';

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
