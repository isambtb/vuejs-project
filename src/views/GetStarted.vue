<template>
  <div class="get-started">
    <GetStartedComponent v-on:create-new-user="createUser"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetStartedComponent from "@/components/GetStartedComponent.vue"; // @ is an alias to /src
import createUserService from "@/services/createUserService"
import router from "@/router";

export default defineComponent({
  name: "GetStarted",
  components: {
    GetStartedComponent,
  },
  methods: {
    async createUser(username: string): Promise<void> {
      const data = await createUserService(username);
      localStorage.setItem("name", data.name);
      localStorage.setItem("code", data.code.toString());
      router.push("add-value");
    }
  }
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
