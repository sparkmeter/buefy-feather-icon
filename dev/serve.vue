<script lang="ts">
import Vue from "vue";
import BuefyFeatherIcon from "@/buefy-feather-icon.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    BuefyFeatherIcon,
  },
});
</script>

<template>
  <div id="app">
    <b-button type="is-danger" icon-left="information">Foo</b-button>
  </div>
</template>
