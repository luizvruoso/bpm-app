import {connect} from 'react-redux';
import HeartBeat from '../screens/HeartBeat';
import {getHeartBeatData} from '../store/modules/heartBeat/Actions';
import {getActualHeartBeatData} from '../store/modules/heartBeatInstant/Actions';
const mapStateToProps = state => {
  return {
    user: state.user,
    heartBeat: state.heartBeat,
    heartBeatInstant: state.heartBeatInstant,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getHeartBeatData: () => {
      return dispatch(getHeartBeatData());
    },
    getActualHeartBeatData: () => {
      return dispatch(getActualHeartBeatData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeartBeat);
