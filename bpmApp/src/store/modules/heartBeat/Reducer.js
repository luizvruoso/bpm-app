import produce from 'immer';
import {convertDate} from '../../../assets/utils';
const INIT_STATE = [];

export default function heartBeat(state = [], action) {
  switch (action.type) {
    case 'SET_HEART_BEAT':
      return produce(state, draft => {
        draft.reverse();
        const index = draft.findIndex(item => {
          return item.date === convertDate(action.payload.date, false);
        });

        if (index == -1) {
          const data = {
            date: convertDate(action.payload.date, false),
            content: [{time: action.payload.date, value: action.payload.value}],
          };

          draft.push(data);
          //draft.reverse();
        } else {
          const data = {time: action.payload.date, value: action.payload.value};

          draft[index].content.push(data);
        }

        return draft.reverse();
      });
    case 'SET_LOADING_DATA':
      return {
        status: 'loading',
      };
    case 'SET_ERROR':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}
