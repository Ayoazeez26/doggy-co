import { state } from './state';

export const mutations = {
  SET_DOGS(state: State, dogs: object[]) {
    state.dogs = dogs;
  }
};