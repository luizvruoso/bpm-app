import {connect} from 'react-redux';
import Home from '../screens/Home';
import {getActualHeartBeatData} from '../store/modules/heartBeatInstant/Actions';
import {getActualSteps} from '../store/modules/stepsInstant/Actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
