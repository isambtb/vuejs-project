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
  value: string;
}

export default defineComponent({
  name: "AddValue",
  data(): IValue {
    return {
      value: "",
    };
  },

  methods: {
    addNewValue(): void {
      this.$emit("add-new-value", this.value);
    },

    logout(): void {
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
  width: 340px
  height: 24px
  flex-grow: 0
  font-family: Poppins
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  text-align: left
  color: #4f4f4f

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
