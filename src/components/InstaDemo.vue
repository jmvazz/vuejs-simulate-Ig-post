<template>
  <HeaderSection />
  <div class="foto-container">
    <img id="foto-elegida" v-if="foto" :src="foto" />
  </div>
  <ButtonsSection />
  <LikeSection />
  <CopySection />
</template>


<script>
import ButtonsSection from "./ButtonsSection.vue";
import HeaderSection from "./HeaderSection.vue";
import LikeSection from "./LikeSection.vue";
import CopySection from "./CopySection.vue";

export default {
  components: {
    ButtonsSection,
    HeaderSection,
    LikeSection,
    CopySection,
  },
  props: {
    foto: ""
  },
  setup() {
    return {};
  },
};
</script>


<style>
.foto-container {
  width: 100%;
  height: 290px;
}

#foto-elegida{
  display: block;
  margin: auto;
  height: auto;
  max-width:100%;
  max-height:100%;
}
</style>