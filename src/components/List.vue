<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Created</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody id="stocksTerminal">
        <tr v-for="(item, index) in items" :key="index">
          <td>
            {{ formatDate(item.created) }}
          </td>
          <td>
            {{ item.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

interface Value {
  id: null;
  value: string;
  created: string;
}

export default defineComponent({
  name: "List",
  props: {
    items: Array,
  },
  methods: {
    formatDate(value: string) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD HH:mm");
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  margin: 40px 0 0
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
table
  width: 300px
  margin-top: 500px 
  margin-right: 0px
  margin-left: 1100px
</style>
