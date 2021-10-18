<script lang="ts">
import Vue, { PropType } from "vue";
import VueFeather from "vue-feather";
import { iconAliases } from "./config";

export default /*#__PURE__*/ Vue.extend({
  name: "BuefyFeatherIcon", // vue component name
  components: {
    feather: VueFeather,
  },
  props: {
    icon: { type: Array as PropType<string[]>, required: true },
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
  <feather class="feather-icons" :type="iconType" />
</template>

<style>
/* Override default Buefy icon styling. */
.feather-icons svg.feather {
  stroke-width: 2px;
  fill: none;
}
</style>
