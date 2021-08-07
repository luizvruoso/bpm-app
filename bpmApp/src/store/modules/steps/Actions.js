import {getSteps} from './middlewares';

export function getSteps() {
  return dispatch => {
    getSteps()
      .then(ret => {
        dispatch(registerSteps(data));
      })
      .catch(err => {
        console.error('ERRO AO RESGATAR PASSOS', err);
        return false;
      });
  };
}

function registerSteps(data) {
  return {
    type: 'REGISTER_STEPS',
    payload: {
      qtd: data.qtd,
    },
  };
}
