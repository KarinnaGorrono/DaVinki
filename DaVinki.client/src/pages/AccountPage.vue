<template>
  <header>
    <Navbar />
   
  </header>
  <main class="row">
    <div class="col-md-12 my-3 d-flex justify-content-center">
      <h1>{{ account.name }}</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-around">
            <h2 class="text-center">Incoming Commissions</h2>
            <h2 class="text-center">My Commissions</h2>
          </div>
        </div>
        <div>
          <router-view />
        </div>
      </div>

      <div class="col-md-6">
        <div class="row">
  </div>
  <div class="col-md-6">
        <div class="my-2 d-flex">
          <img :src="account.picture" alt="" />
        </div>
        </div>
        <div class="col-md-6 ">
          <div class="py-4">

          <h5>Address: {{ account.address}}</h5>
          </div>
        <div class="py-4"> 
          <h5>Facebook: {{ account.facebook}}</h5>
        </div>
        <div class="py-4">
          <h5>Instagram: {{account.instagram}}</h5>
        </div>
        <div class="py-4">
          <h5>Accepting Commissions:  {{ account.acceptingCommissions }}</h5>
        </div>
        </div>
        <div class="row">
          <div class="py-4">
            <p>
              {{ account.biography }}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quidem, ratione illum in incidunt earum voluptates excepturi dicta
              rem perferendis ducimus enim molestias, consectetur voluptas
              soluta molestiae velit iure quis!
            </p>
          </div>
          <div class="py-3">
            "I am extraordinarily patient, provided I get my own way in the
            end." -Margaret Thatcher
          </div>
        </div>
        <div class="d-flex justify-content-end py-5">
          <button
            class="btn btn-outline-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addPiece"
            aria-label="Toggle Edit modal"
          >
            Add Piece
          </button>
          <Modal id="addPiece">
            <template #modal-title>
              <h4>Add New Piece</h4>
            </template>
            <template #modal-body>
              <AddPieceForm />
            </template>
          </Modal>

          <button
            class="btn btn-outline-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#editProfile"
            aria-label="Toggle Edit modal"
          >
            Edit Profile
          </button>
          <Modal id="editProfile">
            <template #modal-title>
              <h4>Edit Profile</h4>
            </template>
            <template #modal-body>
              <EditProfile />
            </template>
          </Modal>
        </div>
      </div>
      <div v-for="p in pieces" :key="p.id">
        <Piece :piece="p" />
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { piecesService } from '../services/PiecesService'
import Piece from '../components/Piece.vue'
import { useRoute } from 'vue-router'
import { AuthService } from '../services/AuthService'

export default {
  components: { Piece },
  props: {
    account: { type: Object, required: true },
    piece: { type: Object, required: true }
  },
  name: 'Account',
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await piecesService.getAllPieces("?creatorId=" + AppState.account.id)

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'Error')
      }
    })

    return {
      account: computed(() => AppState.account),
      pieces: computed(() => AppState.pieces),

    }
  }
}
</script>

<style scoped>
img {
  height: 300px;
}
</style>
