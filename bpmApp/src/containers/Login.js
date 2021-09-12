import {connect} from 'react-redux';
import Login from '../screens/Login';
import {sendTokenTel, validateToken} from '../store/modules/user/Actions'

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    
    sendToken: (tel) => {
      return dispatch(sendTokenTel(tel));
    },
    validateToken: (tel, auth)=>{
      return dispatch(validateToken(tel, auth));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
