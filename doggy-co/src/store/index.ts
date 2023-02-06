import dogs from './dogs';
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  dogs,
});
