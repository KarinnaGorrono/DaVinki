<template>
  <header>
    <Navbar />
  </header>
  <main class="row">
    <div class="col-md-6"></div>
    <div class="col-md-6">
      <h1>{{ account.name }}</h1>
    </div>
    <!-- Account pages here  -->
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
      <!-- Account info here  -->
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6">
            <div class="my-2 d-flex">
              <img :src="account.picture" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="py-4">
              <h5>Location: {{ account.location }}</h5>
            </div>
            <div class="py-4">
              <h5>Facebook: {{ account.facebook }}</h5>
            </div>
            <div class="py-4">
              <h5>Instagram: {{ account.instagram }}</h5>
            </div>

            <div class="py-4">
              <h5>Artist: {{ account.isArtist }}</h5>
            </div>

            <div class="py-4">
              <h5>Accepting Commissions: {{ account.acceptingCommissions }}</h5>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="py-4">
            <p>
              {{ account.biography }}
            </p>
          </div>
          <div class="py-3">
            {{ account.quote }}
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end py-5">
        <button
          class="btn btn-outline-dark"
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
          class="btn btn-outline-dark"
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
    <div class="row">
      <div v-for="p in myPieces" :key="p.id" class="col-md-4 mx-3">
        <div>
          <Piece :piece="p" />
        </div>
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
import { firebaseService } from '../services/FirebaseService';

export default {
  components: { Piece },
  // props: {
  //   account: { type: Object, required: true },
  //   piece: { type: Object, required: true }
  // },
  name: 'Account',
  setup() {
    const route = useRoute()
    // onMounted(async () => {
    //   try {
    //     await piecesService.getMyPieces()
    //     console.log('getting my pieces')

    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast(error.message, 'Error')
    //   }
    // })

    return {
      account: computed(() => AppState.account),
      // pieces: computed(() => AppState.pieces),
      myPieces: computed(() => AppState.myPieces)

    }

  }
}


</script>

<style scoped>
img {
  height: 300px;
}
</style>
