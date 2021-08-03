import {connect} from 'react-redux';
import HeartBeat from '../screens/HeartBeat';

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

export default connect(mapStateToProps, mapDispatchToProps)(HeartBeat);
