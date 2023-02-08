import type { State } from './state';

export const mutations = {
  SET_ALLDOGS(state: State, allDogs: object[]) {
    state.allDogs = allDogs;
  },
  SET_DOGBREEDS(state: State, dogBreeds: object[]) {
    state.dogBreeds = dogBreeds;
  }
};