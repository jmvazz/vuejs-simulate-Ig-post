<template>
  <div>
    {{ copy }}
  </div>
</template>


<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();

    const copy = computed(() => store.state.copy);

    return {
      copy,
    };
  },
};
</script>


<style>
</style>