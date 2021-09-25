import {connect} from 'react-redux';
import Monitor from '../screens/Monitor';
import {getMonitoreds} from '../store/modules/monitored/Actions';
const mapStateToProps = state => {
  return {user: state.user, monitored: state.monitored};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },

    getMonitoreds: () => {
      return dispatch(getMonitoreds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
