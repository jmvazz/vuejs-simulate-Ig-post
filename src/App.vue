<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <Input v-model="message" @customEmitTest="testEmit"/>
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-5">
        <InstaDemo :foto="foto" />
        <div class="d-flex flex-wrap" id="copy-id">
          <div class=""><strong>regiarbranding</strong> {{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import InstaDemo from "./components/InstaDemo.vue";

import { ref } from "vue";

export default {
  components: {
    Input,
    InstaDemo,
  },
  props: {
    foto: ""
  },
  setup() {
    const message = ref("");
    let foto = ref("");

    const testEmit = (e) => {
      console.log("desde el padre")
      foto.value = e
    }

    return {
      message,
      foto,
      testEmit
    };
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  padding-top: 40px;
}

#copy-id {
  padding-left: 0.5rem;
  padding-top: -0.5rem;
}
</style>
