import {connect} from 'react-redux';
import MedicalRecord from '../screens/MedicalRecord';
import {registerUserData} from '../store/modules/user/Actions';
const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    saveData: data => {
      return dispatch(registerUserData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRecord);
