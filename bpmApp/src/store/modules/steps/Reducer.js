import produce from 'immer';
import {convertDate} from '../../../assets/utils';
export default function steps(state = [], action) {
  switch (action.type) {
    case 'SET_STEPS':
      return produce(state, draft => {
        draft.reverse();

        const index = draft?.findIndex(item => {
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
          const data = [
            {time: action.payload.date, value: action.payload.value},
          ];

          draft[index].content = data;
        }

        return draft.reverse();
      });
    case 'SET_LOADING_DATA_STEPS':
      return {
        status: 'loading',
      };
    case 'SET_ERROR_STEPS':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}
