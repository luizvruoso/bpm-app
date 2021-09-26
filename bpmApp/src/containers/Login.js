import {connect} from 'react-redux';
import Login from '../screens/Login';
import {
  sendTokenTel,
  validateToken,
  setPhoneAuth,
} from '../store/modules/user/Actions';

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    sendToken: tel => {
      return dispatch(sendTokenTel(tel));
    },
    validateToken: (tel, auth) => {
      return dispatch(validateToken(tel, auth));
    },
    setPhoneAuth: data => {
      return dispatch(setPhoneAuth(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
