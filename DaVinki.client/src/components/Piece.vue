<template>
  <div
    class="card border-white"
    :data-bs-target="'#piece-' + piece.id"
    data-bs-toggle="modal"
  >
    <img
      :src="piece.coverImg"
      class="card-img-top img-fluid selectable elevation-3"
      :style="`height: ${
        Math.round(Math.random() * 30) + 20
      }em; object-fit:cover;`"
    />
    <div class="piece-body pb-4 text-uppercase pt-1">
      <h4 class="piece-title">{{ piece.name }}</h4>
      <h6 class="piece-artist">{{ piece.creatorId }}</h6>
    </div>
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
