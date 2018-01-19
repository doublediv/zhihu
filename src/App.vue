<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import vHeader from "./components/component/Header";
import { mapGetters, mapActions } from "Vuex";
export default {
  name: "App",
  components: { vHeader },
  computed: {
    ...mapGetters(["getIsNight"])
  },
   methods: {
    ...mapActions(["setNight"]),
   }
};
</script>

<style scoped lang="less">
.fade-enter-active,
.fade-level-active {
  transition: opacity 0.5s linear;
}
.fade-enter,
.fade-level-to {
  opacity: 0;
}
</style>
