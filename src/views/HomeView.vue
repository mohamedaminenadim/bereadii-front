<template>
  <div class="min-h-screen bg-gray-700 text-white flex flex-col">
    <!-- Header -->
    <header class="p-4 text-center text-xl font-bold">Accueil</header>

    <!-- Search Bar -->
    <div class="flex items-center p-2 bg-gray-600 rounded-lg mx-4">
      <input
        type="text"
        placeholder="Rechercher..."
        class="flex-1 p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />
      <font-awesome-icon icon="search" class="text-white pr-2" />
    </div>

    <!-- Welcome Message -->
    <h2 class="mt-4 px-4 text-lg">Bonjour, {{ userName }}</h2>

    <!-- Menu Options -->
    <div class="mt-6 space-y-4 px-4">
      <button class="w-full p-4 bg-gray-600 rounded-lg flex items-center space-x-4">
        <font-awesome-icon icon="calendar" class="text-2xl" />
        <span>Agenda</span>
      </button>
      <button class="w-full p-4 bg-gray-600 rounded-lg flex items-center space-x-4">
        <font-awesome-icon icon="heart" class="text-2xl" />
        <span>Favoris</span>
      </button>
      <button class="w-full p-4 bg-gray-600 rounded-lg flex items-center space-x-4">
        <font-awesome-icon icon="users" class="text-2xl" />
        <span>Prestataires</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userName = ref('John')
</script>

<style scoped>
i {
  font-size: 24px;
}
</style>
