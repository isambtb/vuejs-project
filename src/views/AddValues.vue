<template>
  <div class="container">
    <div class="add-column">
      <AddValue v-on:add-new-value="createNewValue"/>
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
import fetchValuesList from "@/services/fetchListService";
import createValue from "@/services/addValueService";

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
    async createNewValue(value: string): Promise<void> {
      const code = localStorage.getItem("code") || "";
      const name = localStorage.getItem("name") || "";

      await createValue(name, code, { value })
    },

    async updateList(name: string, code: string): Promise<void> {
      this.values = await fetchValuesList(name, code);
    },
  },

  async mounted() {
    const code = localStorage.getItem("code") || "";
    const name = localStorage.getItem("name") || "";
    await this.updateList(name, code);
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