<template>
  <div class="get-started">
    <GetStartedComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetStartedComponent from "@/components/GetStartedComponent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "GetStarted",
  components: {
    GetStartedComponent,
  },
});
</script>

<style scoped lang="sass">
div.get-started
  width: 1366px
  height: 768px
  align-self: center
  flex-grow: 0
  padding: 208px 40px 40px 432px
  background-color: #fff
</style>
