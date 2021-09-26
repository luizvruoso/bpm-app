import {connect} from 'react-redux';
import Devices from '../screens/Devices';

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

export default connect(mapStateToProps, mapDispatchToProps)(Devices);