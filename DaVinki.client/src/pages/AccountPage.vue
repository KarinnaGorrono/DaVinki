<template>
      <header >
      <Navbar />
      <SecondaryNavbar />
     </header>
      <main class="row">
       <div class="col-6">
          Incoming Commissions/ My Commissions

      </div>
      <div class="col-6">
        <div class="my-5 d-flex ">
     
          <h1>Rose</h1>

        
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"  alt="">
        
          
      </div>
       <div class="d-flex justify-content-end">

       <router-view />
       <button
       type="button"
       data-bs-toggle="modal"
       data-bs-target="#addPiece"
       aria-label="Toggle modal"
       >
       Add Piece
       </button>
        <Modal id="addPiece">
         <template #modal-title>
         <h4>Add New Piece</h4>
         </template>
        <template #modal-body>
        <AddPieceForm/>
       </template>
       </Modal>
   
       </div>
       <div>
         <button
           type="button"
           data-bs-toggle=""
           data-bs-target=""
           >
         </button>

       </div>
      </div>

    </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  props:{
account: {type: Object, required: true}
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
