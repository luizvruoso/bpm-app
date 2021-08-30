import {connect} from 'react-redux';
import Routes from '../Routes';
import {loginTelUser} from '../store/modules/user/Actions'

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    
    telAuth: () => {
      return dispatch(loginTelUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
