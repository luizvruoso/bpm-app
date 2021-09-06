import {connect} from 'react-redux';
import MedicalRecord from '../screens/MedicalRecord';
import {saveUserData} from '../store/modules/user/Actions';
const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    saveData: data => {
      return dispatch(saveUserData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRecord);
