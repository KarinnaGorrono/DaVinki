<template>
  <div
    class="bg-white rounded elevation-5 border-white"
    :data-bs-target="'#piece-' + piece.id"
    data-bs-toggle="modal"
  >
    <img :src="piece.coverImg" class="w-100 selectable" />
    <div class="piece-body pb-4 text-uppercase pt-1">
      <h4 class="piece-title">{{ piece.name }}</h4>
      <h6 class="piece-artist">{{ piece.artist.name }}</h6>
    </div>
    <Modal :id="'piece-' + piece.id" class="bg-black">
      <template #modal-title>
        <h4>{{ piece.name }}</h4>
      </template>
      <template #modal-body>
        <div class="row">
          <div class="col-md-3">
            <div class="pt-5">
              <p class="selectable" @click="goToProfile()">
                {{ piece.artist.name }}
              </p>
              <p>{{ piece.createdDate }}</p>
            </div>
          </div>
          <div class="col-md-12 d-flex justify-content-center pt-3">
            <img
              class="rounded img-fluid details-img"
              :src="piece.coverImg"
              alt=""
            />
          </div>
        </div>
        <div class="row pt-5">
          <p class="">
            {{ piece.description }}
          </p>
        </div>
        <button
          @click.prevent="removePiece()"
          type="button"
          data-bs-dismiss="modal"
          aria-label="delete"
          class="btn btn-danger"
          v-if="piece.creatorId == account.id"
        >
          <b>Delete Piece</b>
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { piecesService } from "../services/PiecesService"
import { logger } from "../utils/Logger"
import { useRoute, useRouter } from "vue-router"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"

export default {
  props: {
    piece: { type: Object, required: true }
  },
  setup(props) {
    const route = useRoute()
    const editable = ref({})
    const router = useRouter()
    watchEffect(() => {
      editable.value = { ...props.piece }
    })
    return {
      account: computed(() => AppState.account),
      editable,

      async removePiece() {
        try {
          if (await Pop.confirm()) {
            await piecesService.removePiece(props.piece.id)
          }
          Pop.toast('Piece has been deleted')
        } catch (error) {

          Pop.toast('You are not authorized to delete this piece.')
          logger.log(error.message)
        }
      },
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.piece.creatorId },
        })

        Modal.getOrCreateInstance(
          // NOTE remember to use the props to pass id 
          document.getElementById("piece-" + props.piece.id)).hide();

      }
    }
  }
}
</script>


