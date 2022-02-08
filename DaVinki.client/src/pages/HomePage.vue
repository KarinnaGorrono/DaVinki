<template>
  <div class="row bg-white" v-if="account.id">
    <header>
      <Navbar />
      <SecondaryNavbar />
    </header>
    <main class="row">
      <div class="masonry-with-columns py-2">
        <Piece v-for="n in 15" :key="n" />
      </div>
    </main>
  </div>
  <div v-else class="row background-row">
    <div class="ms-5 ps-4">
      <h1 class="davinkiFont">DaVinki</h1>
    </div>
    <div>
      <h2 class="quoteFont">Simplicity is the ultimate sophistication</h2>
      <br />
      <h3
        class="quoteFont"
        data-bs-toggle="modal"
        data-bs-target="#piece-details"
      >
        -"Leonardo da Vinci"
      </h3>
    </div>
  </div>

  <Modal id="piece-details">
    <template #modal-title> Piece Title </template>
    <template #modal-body>
      <CreateCommissionForm />
    </template>
  </Modal>
</template>
// Separate pages for the piece types or just filters?

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),



    };
  }
}
</script> 

<style scoped lang="scss">
.background-row {
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1501472312651-726afe119ff1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDI5fHxhcnR8ZW58MHx8fHwxNjQzOTI5NTg1&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450");
  background-position: 75%;
  background-size: cover;
}

.davinkiFont {
  font-family: "Italianno", cursive;
  font-size: 25em;
  color: #d4af37;
  text-shadow: 20px 10px 20px black;
}

.quoteFont {
  color: white;
  text-shadow: 10px 5px 10px black;
  -webkit-text-stroke: 0.7px black;
}

body {
  margin: 2;
  padding: 2rem;
}

.masonry-with-columns {
  columns: 500px !important;
  column-gap: 2rem;
  div {
    width: 150px;
    margin: 1rem 1rem 1rem 2rem;
    display: inline-block;
    width: 100%;
    font-weight: 900;
    font-size: 2rem;
  }
  @keyframes scroll {
    100% {
      top: -100%;
    }
  }
}
/* We will math random these background images from the database */
</style>
