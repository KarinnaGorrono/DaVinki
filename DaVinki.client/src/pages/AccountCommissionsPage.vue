<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-around">
          <h3>Piece</h3>
          <h3>Deadline</h3>
          <h3>Status</h3>
        </div>
      </div>
      <div class="row" v-for="c in myCommissions" :key="c.id">
        <!-- V-for in commissions on this row^^ -->
        <div class="col-md-12 d-flex justify-content-around">
          <div>
            <p v-if="isArtist">{{ c.buyer.name }}</p>
            <p v-else>{{ c.artist.name }}</p>
          </div>
          <div>
            <p>{{ new Date(c.createdAt).toLocaleString() }}</p>
          </div>
          <div>
            <p>{{ c.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { logger } from '../utils/Logger';
import { commissionsService } from '../services/CommissionsService'
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService';
export default {
  setup() {
    onMounted(async () => {
      try {
        await commissionsService.getCommission(AuthService.userInfo.id)
        console.log('getting commissions')
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      myCommissions: computed(() => AppState.myCommissions)
    };

  }

}
</script>

<style>
</style>