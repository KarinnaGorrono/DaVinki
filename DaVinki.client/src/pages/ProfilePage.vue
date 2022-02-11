<template>
  <header>
    <Navbar />
  </header>
  <main class="d-flex">
    <div class="col-md-6">
      <img src="" alt="" />
    </div>
    <div class="col-md-6">
      <p>profile info here</p>
    </div>
  </main>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { piecesService } from '../services/PiecesService';
import { AppState } from '../AppState';
export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      if (route.name = "Profile") {

        await piecesService.getAllPieces("?creatorId=" + route.params.id)
      }
    })
    return {
      pieces: computed(() => AppState.pieces)
    };
  }

}
</script>

<style>
</style>