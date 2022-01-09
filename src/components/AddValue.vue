<template>
  <div class="container">
    <div class="intro">
      <p>
        Welcome, <mark> {{ name }} </mark>!<br />
        Please add value to the list.
      </p>
    </div>
    <input
      type="text"
      class="input-control"
      id="value-input"
      v-model="value"
      placeholder="Value"
      name="value-input"
      required
    />
    <button @click="addvalue" class="add-value-btn">Add</button>
    <button @click="logout" class="logout-value-btn">logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import router from "@/router";

interface IValue {
  name: string | null;
  value: string;
}

export default defineComponent({
  name: "AddValue",
  data(): IValue {
    return {
      name: localStorage.getItem("name"),
      value: "",
    };
  },

  methods: {
    async addvalue(): Promise<void> {
      const payload = {
        value: this.value,
      };

      const code = localStorage.getItem("code");
      const name = localStorage.getItem("name");

      try {
        const response = await axios.post(
          `https://hello.dhstaging.net/api/sys/v1.0/front_end_test/${name}/${code}/create_row`,
          payload,
          {
            headers: {
              "x-dhauth-token": "notsupersecret_but_stillakindofpwd",
            },
          }
        );

        if (response.status === 200) {
          this.$emit("reload-list", true);
          this.value = "";
        }
      } catch (error: any) {
        console.log(error.response.data.validation_error.details[0].message);
        alert(error.response.data.validation_error.details[0].message);
      }
    },

    async logout(): Promise<void> {
      localStorage.clear();
      router.push("/");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
div.intro
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

button.add-value-btn
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

button.logout-value-btn
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
  background-color: #DEB887
  color: #fff
  font-size: 20px

div.container
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

mark
  background-color: #fff
  color: #3d9df5
</style>
