import {connect} from 'react-redux';
import Alert from '../screens/Alert';

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

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
