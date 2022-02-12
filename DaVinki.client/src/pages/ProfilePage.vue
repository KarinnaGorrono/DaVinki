<template>
  <header>
    <Navbar />
  </header>
  <main class="d-flex">
    <div class="col-md-6">
      <img :src="profile.picture" alt="" />
    </div>
    <div class="col-md-6">
      <h5>Name: {{ profile.name }}</h5>
      <h5>Bio: {{ profile.biography }}</h5>
      <h5>Location: {{ profile.location }}</h5>
      <h5>Facebook: {{ profile.facebook }}</h5>
      <h5>Instargram: {{ profile.instagram }}</h5>
      <h5>Quote: {{ profile.quote }}</h5>
      <h5>Commissions Accepted: {{ profile.acceptingCommissions }}</h5>
      <button data-bs-toggle="modal" data-bs-target="#createCommission">
        create commission
      </button>
      <button @click="followArtist()">follow this artist</button>
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
import { followersService } from "../services/FollowersService";
import Pop from "../utils/Pop";
export default {
  name: 'Profile',
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await profilesService.getProfile(route.params.id);
        await piecesService.getAllPieces("?creatorId=" + route.params.id);
        await followersService.getByAccount(route.params.id)
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      pieces: computed(() => AppState.pieces),
      profile: computed(() => AppState.profile),
      followers: computed(() => AppState.followers),
      // account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),


      async followArtist() {
        try {
          await followersService.createFollower(route.params.id)
          Pop.toast('you are now a follower!')
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error.message)
        }
      }
    };



  }


}
</script>

<style>
</style>