<template>
  <header>
    <Navbar />
    <SecondaryNavbar />
  </header>
  <main class="row">
    <div class="col-12 my-3 d-flex justify-content-center">
      <h1>{{ account.name }}</h1>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12 d-flex justify-content-around">
            <h2 class="text-center">Incoming Commissions</h2>
            <h2 class="text-center">My Commissions</h2>
          </div>
        </div>
        <div class="row">
          <router-view />
        </div>
      </div>
      <div class="col-6">
        <div class="my-2 d-flex">
          <img :src="account.picture" alt="" />
        </div>
        <div>
          <p>{{ account.biography }}</p>
        </div>
        <div class="d-flex justify-content-end">
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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  props: {
    account: { type: Object, required: true }
  },
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  height: 300px;
}
</style>
