<template>
  <div class="mb-6">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile" @change="previewFiles" />
  </div>
  <br />
  <div class="mb-6">
    <label for="exampleFormControlTextarea1" class="form-label"
      >Example textarea</label
    >
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      v-model="message"
      v-on:keyup="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>


<script>
import { computed, ref } from "vue";

export default {
  props: {
    modelValue: "",
    URLValor: "",
  },
  setup(props, { emit }) {

    let URLValor = ref("")

    const message = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });


    const previewFiles = (e) => {
      const file = e.target.files[0];
      URLValor.value = URL.createObjectURL(file);
      emit("customEmitTest", URLValor.value)
    };

    // const foto = computed({
    //   get: () => props.URLValor,
    //   set: (value) => emit("update:URLValor", value)
    // });


    // const URLValor2 = computed(() => {
    //   return URLValor.value
    // })

    return {
      message,
      //foto,
      URLValor,
      previewFiles
    };
  },
};
</script>