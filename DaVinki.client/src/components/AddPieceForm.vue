<template>
  <form @submit.prevent="postPiece()" class="row g-3">
    <div class="col-12">
      <label for="inputProjectName" class="form-label">Project Name:</label>
      <input
        required
        type="text"
        class="form-control"
        id="inputProjectName"
        placeholder="Project Name..."
        v-model="editable.name"
      />
    </div>
    <div class="col-md-8">
      <label for="inputImgSrc" class="form-label">Image Source:</label>
      <input type="file" class="form-control" id="inputImgSrc" />
    </div>
    <div class="col-md-4">
      <label for="inputDate" class="form-label">Date of Creation:</label>
      <input required type="date" class="form-control" id="inputDate" />
    </div>
    <div class="col-12">
      <label for="inputTags" class="form-label">Project Tags:</label>
      <input
        required
        type="text"
        class="form-control"
        id="inputTags"
        placeholder="Tags..."
      />
    </div>
    <div class="col-12">
      <label for="inputPieceType" class="form-label">Type of Piece</label>
      <select id="inputPieceType" class="form-select" required>
        <option selected>Select a file type...</option>
        <option>Painting/Drawing</option>
        <option>Three Dimensional</option>
        <option>Photography</option>
      </select>
    </div>
    <div class="col-12">
      <label for="inputPieceDescription" class="form-label">Description</label>
      <textarea
        placeholder="Please include description for the piece."
        name="eventDescription"
        rows="8"
        type="text"
        class="form-control"
        id="inputEventDescription"
        required="true"
      ></textarea>
    </div>
    <div class="col-12 mt-5 d-flex justify-content-between">
      <button type="submit" class="btn btn-success">Submit</button>
      <button type="button" class="btn btn-outline-danger">Cancel</button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { piecesService } from '../services/PiecesService';
import { firebaseService } from '../services/FirebaseService';
export default {
  setup() {

    const editable = ref({})

    return {
      editable,
      async postPiece() {
        const form = event.target
        const imgInput = form.inputImgSrc
        const file = imgInput.files[0]
        if (!file) { return }
        const url = await firebaseService.uploadFile(file, editable.value)
        editable.value.coverImg = url
        // FIXME make the form actually work
        await piecesService.createPiece(editable.value)
        editable.value = {}
      },
      async uploadTest() {
      }
    };
  }
}
</script>

<style>
</style>