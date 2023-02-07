import type { State } from './state';

export type Getters = {
  getAllDogs(state: State): object[] | null;
  getDogBreeds(state: State): object[] | null;
};

export const getters = {
  getAllDogs(state: State) {
    return state.allDogs;
  },
  getDogBreeds(state: State) {
    console.log(state.dogBreeds);
    return state.dogBreeds;
  }
};