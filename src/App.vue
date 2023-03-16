<template>
  <!-- Header -->
  <app-header />

  <!-- Introduction -->
  <app-description />

  <!-- Main Content -->
  <app-main-content />

  <!-- Player -->
  <app-player />

  <!-- Auth Modal -->
  <app-auth />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppAuth from './components/AppAuth.vue'
import AppDescription from './components/AppDescription.vue'
import AppMainContent from './components/AppMainContent.vue'
import AppPlayer from './components/AppPlayer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppDescription,
    AppMainContent,
    AppPlayer
  }
}
</script>

<style></style>
