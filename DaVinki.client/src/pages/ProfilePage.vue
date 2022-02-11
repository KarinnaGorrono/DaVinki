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
      <button data-bs-toggle="modal" data-bs-target="#createCommission">
        create commission
      </button>
      <button>follow this artist</button>
    </div>
  </main>
  <Modal id="createCommission">
    <template #modal-title>
      <h4>Commission Artist's Name</h4>
    </template>
    <template #modal-body>
      <CreateCommissionForm />
    </template>
  </Modal>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { piecesService } from '../services/PiecesService';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import { profilesService } from '../services/ProfilesService'
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await profilesService.getProfile(route.params.id);
        await piecesService.getAllPieces("?creatorId=" + route.params.id);
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      pieces: computed(() => AppState.pieces),
      profile: computed(() => AppState.profile)
    };

 

}

  
}
</script>

<style>
</style>