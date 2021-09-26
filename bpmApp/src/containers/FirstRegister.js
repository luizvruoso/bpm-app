import {connect} from 'react-redux';
import FirstRegister from '../screens/FirstRegister';
import {
  sendTokenTel,
  validateToken,
  registerUserData,
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
    saveData: data => {
      return dispatch(registerUserData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstRegister);
