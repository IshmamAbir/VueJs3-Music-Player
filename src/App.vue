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
import { mapWritableState } from 'pinia'
import UseUserStore from './stores/user'
import { auth } from './includes/firebase'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppDescription,
    AppMainContent,
    AppPlayer
  },
  computed: {
    ...mapWritableState(UseUserStore, ['userLoggedIn'])
  },
  created() {
    console.log('From app.vue ' + auth.currentUser)
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<style></style>
