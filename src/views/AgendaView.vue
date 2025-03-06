<template>
  <div class="min-h-screen bg-gray-700 text-white flex flex-col">
    <!-- Header -->
    <header class="p-4 text-center text-xl font-bold">Agenda</header>

    <!-- Date Navigation -->
    <div class="flex justify-between items-center px-4 py-2">
      <button class="text-gray-300">
        <font-awesome-icon icon="chevron-left" />
      </button>
      <span class="font-semibold">{{ currentMonth }}</span>
      <button class="text-gray-300">
        <font-awesome-icon icon="chevron-right" />
      </button>
    </div>

    <!-- Appointments List -->
    <div class="px-4 space-y-4 mt-4">
      <div
        v-for="appointment in appointments"
        :key="appointment.id"
        class="bg-gray-600 rounded-lg p-4"
      >
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center space-x-2">
              <font-awesome-icon icon="calendar" class="text-gray-300" />
              <span class="font-semibold">{{ appointment.date }}</span>
            </div>
            <div class="mt-2">
              <h3 class="font-semibold">{{ appointment.provider }}</h3>
              <p class="text-sm text-gray-300">{{ appointment.service }}</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm text-gray-300">{{ appointment.time }}</span>
            <div class="mt-2 space-x-2">
              <button class="text-blue-400" @click="editAppointment(appointment.id)">
                <font-awesome-icon icon="edit" />
              </button>
              <button class="text-red-400" @click="cancelAppointment(appointment.id)">
                <font-awesome-icon icon="trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="appointments.length === 0"
      class="flex flex-col items-center justify-center flex-grow"
    >
      <font-awesome-icon icon="calendar" class="text-4xl mb-4 text-gray-400" />
      <p class="text-gray-400">Aucun rendez-vous prévu</p>
    </div>

    <!-- Add Appointment Button -->
    <button
      @click="addAppointment"
      class="fixed bottom-20 right-4 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
    >
      <font-awesome-icon icon="plus" class="text-xl" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentMonth = ref('Mars 2024')

const appointments = ref([
  {
    id: 1,
    date: '15 Mars 2024',
    time: '14:30',
    provider: 'Marie Dupont',
    service: 'Coiffure',
  },
  {
    id: 2,
    date: '18 Mars 2024',
    time: '10:00',
    provider: 'Jean Martin',
    service: 'Massage',
  },
])

const editAppointment = (id) => {
  console.log('Edit appointment', id)
}

const cancelAppointment = (id) => {
  appointments.value = appointments.value.filter((apt) => apt.id !== id)
}

const addAppointment = () => {
  console.log('Add new appointment')
}
</script>
