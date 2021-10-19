![](https://img.shields.io/npm/v/buefy-feather-icon)

## buefy-feather-icon

Use [vue-feather](https://www.npmjs.com/package/vue-feather) icon components in [Buefy](https://www.npmjs.com/package/buefy).

```vue
<b-button type="is-primary" icon-left="information">Details</b-button>
```

## Installation

```shell
npm install buefy-feather-icon
```

Then, add the following to your application's entrypoint:

```js
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueFeather from "vue-feather";
import BuefyFeatherIcon from "buefy-feather-icon";

Vue.use(VueFeather);

// Add the following fields to your Buefy configuration
Vue.use(Buefy, {
  defaultIconPack: "feather-icons",
  defaultIconComponent: BuefyFeatherIcon,
});

// Proceed with application initialization
new Vue(/** **/).$mount("#app");
```

## Configuration

Buefy uses the names of Font Awesome icons for its bundled components. For
example, it will use `times` when attempting to render a close _x_. The Feather
icon collection uses a different set of names for some of these. This library
ships with a basic set of mappings from Font Awesome to Feather. However, it is
not complete (PRs welcome!). To that end, if you wish to fill a gap, or
override any of the builtins icons, add the following configuration to your
entrypoint.

```js
Vue.use(BuefyFeatherIcon, {
  aliases: {
    "font-awesome-icon-name": "feather-icon-name",
  },
});
Vue.use(Buefy, {
  defaultIconPack: "feather-icons",
  defaultIconComponent: BuefyFeatherIcon,
});
```
