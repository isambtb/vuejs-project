<template>
  <div class="container">
    <h3>Get started by choosing a name below</h3>
    <div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="username"
          placeholder="Name"
          name="user-value"
        />
      </div>
      <button @click="createUser" class="create-btn">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import router from "../router";

interface IName {
  username: string;
}

export default defineComponent({
  name: "GetStartedComponent",
  data(): IName {
    return {
      username: "",
    };
  },

  methods: {
    async createUser(): Promise<void> {
      const payload = {
        name: this.username,
      };

      try {
        const response = await axios.post(
          "https://hello.dhstaging.net/api/sys/v1.0/front_end_test/create_test",
          payload,
          {
            headers: {
              "x-dhauth-token": "notsupersecret_but_stillakindofpwd",
            },
          }
        );

        if (response.status === 200) {
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("code", response.data.data.code);
          router.push("add-value");
        }
      } catch (error: any) {
        console.log(error.response.data.validation_error.details[0].message);
        alert(error.response.data.validation_error.details[0].message);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  width: 798px
  height: 63px
  margin: 0 0 48px
  object-fit: contain
  font-family: Poppins
  font-size: 42px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  text-align: center
  align: center
  color: #333333

input
  width: 400px
  height: 52px
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-items: flex-start
  gap: 10px
  margin: 48px 199px 24px
  padding: 14px 21px
  object-fit: contain
  border-radius: 10px
  border: solid 1px #f2f2f2
  background-color: #fff
  font-size: 20px

button
  width: 440px
  height: 52px
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 10px
  margin: 48px 199px 24px
  padding: 14px 21px
  object-fit: contain
  border-radius: 10px
  background-color: #3d9df5
  color: #fff
  font-size: 20px

div.container
  position: fixed
  top: 50%
  left: 50%

  /* bring your own prefixes
  transform: translate(-50%, -50%)
</style>
