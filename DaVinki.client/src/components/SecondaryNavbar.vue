<template>
  <div class="row bg-white pt-2">
    <div class="col-md-12 d-flex justify-content-around text-uppercase">
      <div>
        <h5
          class="selectable"
          @click="filterPieces('Drawings/Paintings')"
          href="#"
        >
          Paintings & Drawings
        </h5>
      </div>
      <div>
        <h5
          class="selectable"
          @click="filterPieces('threeDimensional')"
          href="#"
        >
          Three Dimensional
        </h5>
      </div>
      <div>
        <h5 class="selectable" @click="filterPieces('Photography')" href="#">
          Photography
        </h5>
      </div>
    </div>
  </div>
</template>
// On click each type to filter display by piece type

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { piecesService } from "../services/PiecesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {

  setup() {
    onMounted(async () => {
      try {
        await piecesService.getAllPieces()
      } catch (error) {
        Pop.toast(error.message, "error")
        logger.log(error)
      }
    })
    return {
      pieces: computed(() => AppState.filteredPieces),
      user: computed(() => AppState.user),

      filterPieces(type) {
        let filteredPieces = AppState.pieces.filter(p => p.type == type)
        logger.log
          (filteredPieces)
        AppState.filteredPieces = filteredPieces
      }
    };
  }
}
</script>

<style>
</style>