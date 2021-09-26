import {connect} from 'react-redux';
import Steps from '../screens/Steps';
import {getActualSteps} from '../store/modules/stepsInstant/Actions';
import {getSteps} from '../store/modules/steps/Actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    steps: state.steps,
    stepsInstant: state.stepsInstant,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    getActualStepsData: () => {
      return dispatch(getActualSteps());
    },
    getSteps: () => {
      return dispatch(getSteps());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
