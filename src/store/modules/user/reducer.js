import produce from 'immer';

import { Types } from './actions';

const INITIAL_STATE = {
  partnerId: 0,
  groupId: 0,
  userId: 0,
  loading: false,
  error: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.error = false;
      });

    case Types.SUCCESS:
      return produce(state, draft => {
        const { partnerId, userId, groupId } = action.payload;
        draft.partnerId = partnerId;
        draft.userId = userId;
        draft.groupId = groupId;
        draft.loading = false;
        draft.error = false;
      });

    case Types.FAILURE:
      return produce(state, draft => {
        draft.partnerId = 0;
        draft.userId = 0;
        draft.groupId = 0;
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
}
