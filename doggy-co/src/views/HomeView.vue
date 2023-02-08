<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { fetchDogBreeds, getByBreed } from '@/services/DogService';

const store = useStore();
const allBreeds = ref<string[]>([]);
const breed = ref<string>('');

watch(breed, (val) => {
  if (val !== '') {
    getDogsByBreed(val);
  }
});

function capitalizeFirstLetter(letter: string): string {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}

const getAllDogBreeds = (breeds: object[]) => {
  for (const [key, value] of Object.entries(breeds[0])) {
    if (value.length === 0) {
      allBreeds.value.push(capitalizeFirstLetter(key));
    } else {
      value.forEach(item => {
        allBreeds.value.push(`${capitalizeFirstLetter(item)} ${capitalizeFirstLetter(key)}`);
      });
    }
  };
};


const dogBreeds = computed(() => store.getters['dogs/getDogBreeds']);
console.log(dogBreeds.value);

if (!dogBreeds.value) {
  fetchDogBreeds()
    .then((res) => {
      store.dispatch('dogs/setDogBreeds', [res.message]);
      console.log(store.getters['dogs/getDogBreeds']);
      getAllDogBreeds([res.message]);
    })
    .catch((err) => {
      console.log(err);
    })
} else {
  console.log(dogBreeds.value);
  getAllDogBreeds(dogBreeds.value);
}

const getDogsByBreed = (breedName: string) => {
  getByBreed(breedName.toLowerCase())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

</script>

<template>
  <main>
    <h2>DoggyCo</h2>
    <!-- {{ allBreeds }} -->
    <q-select class="q-mt-lg" outlined dense v-model="breed" :options="allBreeds" label="Select Breed" />
  </main>
</template>
