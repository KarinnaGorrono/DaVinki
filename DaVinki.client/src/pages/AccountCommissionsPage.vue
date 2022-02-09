<template>
  <div class="row">
    <div class="col-md-12 d-flex">
      <table class="">
        <tr>
          <th>Piece</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Commission Name</td>
          <td>Commission Deadline</td>
          <td>Commission Status</td>
        </tr>
      </table>
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
      commissions: computed(() => AppState.commissions)
    };

  }

}
</script>

<style>
</style>