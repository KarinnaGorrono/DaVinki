<template>
  <form @submit.prevent="profilePic()">
    <div class="row justify-content-center align-items-center elevation-3 my-3">
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Name..."
          v-model="editable.name"
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Email..."
          v-model="editable.email"
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Facebook..."
          v-model="editable.facebook"
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Instagram..."
          v-model="editable.instagram"
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Location..."
          v-model="editable.location"
        />
      </div>
      <div class="col-md-5 mb-2">
        <select
          v-model="editable.isArtist"
          name="isArtist"
          id="isArtist"
          class="form-control"
        >
          <option disabled selected value="">Artist</option>
          <option>true</option>
          <option>false</option>
        </select>

        <select
          v-model="editable.acceptingCommissions"
          name="acceptingCommissions"
          id="acceptingCommissions"
          class="form-control"
        >
          <option disabled selected value="">Accepting Commission</option>
          <option>true</option>
          <option>false</option>
        </select>
      </div>
      <div class="col-md-6 mb-2">
        <input
          type="file"
          class="form-label"
          placeholder="Profile Picture..."
          id="inputImgSrc"
        />
      </div>
      <div class="col-12 mb-2">
        <textarea
          type="text"
          class="form-control"
          placeholder="Quote..."
          v-model="editable.quote"
        />
      </div>
      <div class="col-12 mb-2">
        <textarea
          type="text"
          class="form-control"
          placeholder="Biography..."
          v-model="editable.biography"
        />
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button class="btn btn-success">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { useRoute } from "vue-router";
import { accountService } from '../services/AccountService';
import { AppState } from '../AppState';
import { Modal } from "bootstrap"
import { firebaseService } from '../services/FirebaseService';
export default {
  setup() {
    const route = useRoute();
    const editable = ref({});
    return {
      editable,

      // async editProfile() {
      //   try {
      //     await accountService.edit(editable.value, route.params.id);
      //     // editable.value = {};
      //     this.profilePic()
      //     Modal.getOrCreateInstance(
      //       document.getElementById("editProfile")).hide();
      //     Pop.toast("Profile Changed Successfully");
      //   } catch (error) {
      //     Pop.toast(error.message, "error");
      //     logger.log(error);
      //   }
      // },
      // NOTE One function of maybe two?? 

      async profilePic() {
        const form = event.target
        const imgInput = form.inputImgSrc
        const file = imgInput.files[0]
        Modal.getOrCreateInstance(
          document.getElementById("editProfile")).hide();
        Pop.toast("Profile picture has been updated!")
        if (!file) { return }
        const url = await firebaseService.uploadProfilePic(file, editable.value)
        editable.value.picture = url


        await accountService.edit(editable.value, route.params.id)
        editable.value = {}
      },
      async uploadTest() {
      }


    };


  },
};
</script>