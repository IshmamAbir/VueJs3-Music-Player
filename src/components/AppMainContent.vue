<template>
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import AppSongItem from './SongItem.vue'
import { songsCollection } from '../includes/firebase'

export default {
  name: 'AppMainContent',
  components: {
    AppSongItem
  },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    const snapshot = await songsCollection.get()
    snapshot.forEach((document) => {
      this.songs.push({
        docID: document.id,
        ...document.data()
      })
    })
  }
}
</script>
