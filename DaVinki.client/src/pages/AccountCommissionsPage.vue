<template>
  <p>This is the account commissions page</p>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { logger } from '../utils/Logger';
export default {
  setup() {
    onMounted(async () => {
      try {
        await commissionsService.getCommission(req.userInfo.id)
        console.log('getting commissions')
      } catch (error) {
        logger.log(error)
      }
    })
    return {};

  }

}
</script>

<style>
</style>