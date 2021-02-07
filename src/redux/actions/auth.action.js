import * as types from '../../types/auth.type';

export function RegisterAction(user) {
  console.log(user);
  return {
    type: types.REGISTRATION_REQUEST,
    payload: user,
  };
}
