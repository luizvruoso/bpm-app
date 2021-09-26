import {connect} from 'react-redux';
import Home from '../screens/Home';
import {getActualHeartBeatData} from '../store/modules/heartBeatInstant/Actions';
import {getActualSteps} from '../store/modules/stepsInstant/Actions';
import {sendUserStatusData} from '../store/modules/monitored/Actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    heartBeatInstant: state.heartBeatInstant,
    stepsInstant: state.stepsInstant,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    getActualHeartBeatData: () => {
      return dispatch(getActualHeartBeatData());
    },
    getActualStepsData: () => {
      return dispatch(getActualSteps());
    },
    sendUserStatusData: data => {
      return dispatch(sendUserStatusData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
