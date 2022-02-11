<template>
  <form @submit.prevent="createCommission()" class="row g-3">
    <div class="col-12">
      <label for="buyerName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="inputBuyerName"
        required="true"
        v-model="editable.name"
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
        v-model="editable.email"
      />
    </div>
    <div class="col-md-4">
      <label for="inputPieceType" class="form-label">Type of Piece</label>
      <select
        id="inputPieceType"
        class="form-select"
        required="true"
        v-model="editable.type"
      >
        <option selected>Type...</option>
        <option>Drawings/Paintings</option>
        <option value="threeDimensional">Three Dimensional</option>
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
        v-model="editable.description"
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
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { commissionsService } from '../services/CommissionsService';
import { logger } from '../utils/Logger';
export default {
  setup() {
    const route = useRoute()
    const editable = ref({})
    return {
      async createCommission() {
        try {
          editable.value.artistId = route.params.id,
            await commissionsService.createCommission(editable.value)
          editable.value = {}
        } catch (error) {
          logger.log(error)
        }
      },
      route,
      editable
    };
  }
}
</script>

<style>
</style>