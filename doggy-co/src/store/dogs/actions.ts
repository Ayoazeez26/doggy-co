import { fetchAllDogs } from '@/services/DogService';

export default {
  async fetchAllDogs({ commit }: { commit: object }) {
    try {
      const response = await fetchAllDogs();
      if (response) {
        return Promise.resolve(response);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  },
  setDogBreeds({ commit }, payload: object[]) {
    commit('SET_DOGBREEDS', payload);
  },
}