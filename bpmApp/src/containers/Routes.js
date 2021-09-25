import {connect} from 'react-redux';
import Routes from '../Routes';
import {
  loginTelUser,
  logout,
  refreshUserInfo,
} from '../store/modules/user/Actions';

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
    onLogout: () => {
      return dispatch(logout());
    },
    refreshUserInfo: () => {
      return dispatch(refreshUserInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
