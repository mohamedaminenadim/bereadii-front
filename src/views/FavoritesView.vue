<template>
  <div class="min-h-screen bg-gray-700 text-white flex flex-col">
    <!-- Header -->
    <header class="p-4 text-center text-xl font-bold">Favoris</header>

    <!-- Search Bar -->
    <div class="flex items-center p-2 bg-gray-600 rounded-lg mx-4 mb-4">
      <input
        type="text"
        placeholder="Rechercher un favori..."
        class="flex-1 p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />
      <font-awesome-icon icon="search" class="text-white pr-2" />
    </div>

    <!-- Favorites List -->
    <div class="px-4 space-y-4">
      <div v-for="favorite in favorites" :key="favorite.id" class="bg-gray-600 rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <font-awesome-icon
              :icon="favorite.gender === 'male' ? 'person' : 'person-dress'"
              class="text-xl"
            />
            <div>
              <h3 class="font-semibold">{{ favorite.name }}</h3>
              <p class="text-sm text-gray-300">{{ favorite.specialty }}</p>
            </div>
          </div>
          <button @click="toggleFavorite(favorite.id)" class="text-red-500">
            <font-awesome-icon icon="heart" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="favorites.length === 0" class="flex flex-col items-center justify-center flex-grow">
      <font-awesome-icon icon="heart" class="text-4xl mb-4 text-gray-400" />
      <p class="text-gray-400">Aucun favori pour le moment</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const favorites = ref([
  {
    id: 1,
    name: 'Marie Dupont',
    specialty: 'Coiffure',
    // image: 'https://placekitten.com/100/100',
    gender: 'female',
  },
  {
    id: 2,
    name: 'Jean Martin',
    specialty: 'Massage',
    // image: 'https://placekitten.com/101/101',
    gender: 'male',
  },
])

const toggleFavorite = (id) => {
  favorites.value = favorites.value.filter((fav) => fav.id !== id)
}
</script>
