<template>
  <div class="container">
    <div class="add-column">
      <AddValue v-on:reload-list="shouldReload"/>
    </div>
    <div class="list-container">
      <List v-bind:items="values" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import AddValue from "@/components/AddValue.vue";
import List from "@/components/List.vue";
import axios from "axios";

interface IList {
  values: any[];
}

export default defineComponent({
  name: "Add",
  components: {
    AddValue,
    List,
  },
  data(): IList {
    return {
      values: [],
    };
  },
  methods: {
    async shouldReload(reloadList: boolean) {
      console.log(reloadList);
      if (reloadList === true) {
        await this.updateList();
      }
    },

    async updateList(): Promise<void> {
      const code = localStorage.getItem("code");
      const name = localStorage.getItem("name");

      try {
        const response = await axios.get(
          `https://hello.dhstaging.net/api/sys/v1.0/front_end_test/${name}/${code}/get_rows`,
          {
            headers: {
              "x-dhauth-token": "notsupersecret_but_stillakindofpwd",
            },
          }
        );

        if (response.status === 200) {
          console.log(response);
          this.values = response.data.data;
        }
      } catch (error: any) {
        console.log(error.response.data.validation_error.details[0].message);
        alert(error.response.data.validation_error.details[0].message);
      }
    },
  },

  mounted() {
    this.updateList();
  },
});
</script>

<style scoped lang="sass">
div.list-container
  width: 480px
  height: 860px
  margin: 34px 0 0 112px
  object-fit: contain
</style>