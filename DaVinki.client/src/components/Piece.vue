<template>
  <div
    class="bg-white rounded elevation-1 border-white"
    :data-bs-target="'#piece-' + piece.id"
    data-bs-toggle="modal"
  >
    <img
      :src="piece.coverImg"
      class=" w-100 selectable elevation-3"
    
    />
    <div class="piece-body pb-4 text-uppercase pt-1">
      <h4 class="piece-title">{{ piece.name }}</h4>
      <h6 class="piece-artist">{{ piece.artist.name }}</h6>
    </div>
  <Modal :id="'piece-' + piece.id">
    <template #modal-title>
      <h4>{{ piece.name }}</h4>
    </template>
    <template #modal-body>
      <div class="row">
        <div class="col-md-3">
          <div class="pt-5">
            <p>{{ piece.artist }}</p>
          </div>
        </div>
        <div class="col-md-9 d-flex justify-content-center pt-3">
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
    </template>
  </Modal>
  </div>
</template>

<script>
export default {
  props: {
    piece: { type: Object, required: true }
  }
}
</script>


<style>
</style>
