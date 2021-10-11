<script lang="ts">
import Vue, { PropType } from "vue";
import VueFeather from "vue-feather";

// Add additional mappings from Buefy's font-awesome names to Feather's as they become necessary
const iconAliases: { [bulmaName: string]: string } = {
  information: "info",
  magnify: "search",
  times: "x",
};

export default /*#__PURE__*/ Vue.extend({
  name: "BuefyFeatherIcon", // vue component name
  components: {
    VueFeather,
  },
  props: {
    icon: { type: Array as PropType<string[]> },
    size: String,
  },
  computed: {
    iconType(): string {
      if (iconAliases.hasOwnProperty(this.icon[1])) {
        return iconAliases[this.icon[1]];
      } else {
        return this.icon[1];
      }
    },
  },
});
</script>

<template>
  <feather class="feather-icons" :type="iconType"></feather>
</template>

<style>
/* Override default Buefy icon styling. */
.feather-icons svg.feather {
  stroke-width: 2px;
  fill: none;
}
</style>
