<template>
  <div class="min-h-screen bg-gray-700 text-white flex flex-col">
    <!-- Header -->
    <header class="p-4 text-center text-xl font-bold">
      <div class="flex justify-between items-center px-4 py-2">
        <button class="text-gray-300">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <span>My account</span>
        <button class="text-gray-300">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
    </header>

    <!-- Appointments List -->
    <div class="px-4 space-y-4 mt-4">
      <h2 class="font-bold">Mes informations</h2>
      <div class="flex items-start">
        <div>
          <div class="flex items-center space-x-2">
            <h3 class="font-semibold">Nom</h3>
            <p class="text-sm text-gray-300">{{ profile_.familyName }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <h3 class="font-semibold">Prénom</h3>
            <p class="text-sm text-gray-300">{{ profile_.firstName }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <h3 class="font-semibold">Adress</h3>
            <p class="text-sm text-gray-300">{{ profile_.postalAdress }}</p>
          </div>
          <p class="text-sm text-gray-300">{{ profile_.postalCode }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profile_ = ref({
  id: 1,
  familyName: 'Doe',
  firstName: 'John',
  postalAdress: '10 rue de Paris,',
  postalCode: '75000 Paris',
  uniqueId: 120545425466,
})

// const editAppointment = (id) => {
//   console.log('Edit appointment', id)
// }

// const cancelAppointment = (id) => {
//   appointments.value = appointments.value.filter((apt) => apt.id !== id)
// }

// const addAppointment = () => {
//   console.log('Add new appointment')
// }
</script>
