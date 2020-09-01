export const Types = {
  REQUEST: '@user-USER_REQUEST',
  SUCCESS: '@user-USER_SUCCESS',
  FAILURE: '@user-USER_FAILURE',
};

export function userJWTRequest() {
  return {
    type: Types.REQUEST,
    payload: {},
  };
}

export function userJWTSuccess(jwtInfo) {
  return {
    type: Types.SUCCESS,
    payload: jwtInfo,
  };
}

export function userJWTFailure() {
  return {
    type: Types.FAILURE,
  };
}
