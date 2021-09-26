import {connect} from 'react-redux';
import TypeAuthCode from '../screens/TypeAuthCode';
import {sendTokenTel, validateToken} from '../store/modules/user/Actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeAuthCode);
