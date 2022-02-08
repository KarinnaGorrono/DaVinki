<template>
  <form class="row g-3">
    <div class="col-12">
      <label for="buyerName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="inputBuyerName"
        required="true"
      />
    </div>
    <div class="col-12">
      <label for="inputEventLocation" class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        id="inputBuyerEmail"
        placeholder="Email"
        required="true"
      />
    </div>
    <div class="col-md-4">
      <label for="inputPieceType" class="form-label">Type of Piece</label>
      <select id="inputPieceType" class="form-select" required="true">
        <option selected>Type...</option>
        <option>Painting/Drawing</option>
        <option>Three Dimensional</option>
        <option>Photography</option>
      </select>
    </div>
    <div class="col-12">
      <label for="inputPieceDescription" class="form-label">Description</label>
      <textarea
        placeholder="Please include description of piece and expected budget"
        name="eventDescription"
        rows="8"
        type="text"
        class="form-control"
        id="inputEventDescription"
        required="true"
      ></textarea>
    </div>

    <div class="modal-footer">
      <button class="btn btn-dark" data-bs-dismiss="modal" aria-label="close">
        Close
      </button>
      <button type="submit" class="btn btn-dark" aria-label="save">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  }
}
</script>

<style>
</style>