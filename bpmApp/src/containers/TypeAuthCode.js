import {connect} from 'react-redux';
import TypeAuthCode from '../screens/TypeAuthCode';
import {
  sendTokenTel,
  validateToken,
  failedLogin,
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
    failedLogin: () => {
      return dispatch(failedLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeAuthCode);
