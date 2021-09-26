import {connect} from 'react-redux';
import Ble from '../components/Ble';
import {setActualHeartBeat} from '../store/modules/heartBeatInstant/Actions';
import {setActualSteps} from '../store/modules/stepsInstant/Actions';

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
    setActualSteps: value => {
      return dispatch(setActualSteps(value));
    },
    setActualHeartBeat: value => {
      return dispatch(setActualHeartBeat(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ble);
