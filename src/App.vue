<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    // This should be replaced with your actual auth logic
    const isAuthenticated = ref(true)

    return {
      isAuthenticated,
    }
  },
}
</script>

<template>
  <!-- Show different navigation based on auth status -->
  <nav v-if="isAuthenticated" class="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
      <router-link to="/" class="nav-link">
        <font-awesome-icon icon="home" />
        <span>Home</span>
      </router-link>

      <router-link to="/favorites" class="nav-link">
        <font-awesome-icon icon="heart" />
        <span>Favorites</span>
      </router-link>

      <router-link to="/agenda" class="nav-link">
        <font-awesome-icon icon="calendar" />
        <span>Agenda</span>
      </router-link>

      <router-link to="/profile" class="nav-link">
        <font-awesome-icon icon="user" />
        <span>Profile</span>
      </router-link>
    </div>
  </nav>

  <nav v-else class="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
    <div class="max-w-screen-xl mx-auto flex justify-center gap-8 items-center">
      <router-link to="/login" class="nav-link">
        <font-awesome-icon icon="user" />
        <span>Login</span>
      </router-link>

      <router-link to="/register" class="nav-link">
        <font-awesome-icon icon="user-plus" />
        <span>Register</span>
      </router-link>
    </div>
  </nav>

  <!-- Add padding-bottom to prevent content from being hidden under fixed navbar -->
  <div class="pb-20">
    <router-view />
  </div>
</template>

<style scoped>
.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.2s ease;
}

.nav-link svg {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.nav-link span {
  font-size: 0.75rem;
}

.nav-link:hover {
  color: var(--accent-color);
}

.router-link-active {
  color: var(--primary-color);
}
</style>
