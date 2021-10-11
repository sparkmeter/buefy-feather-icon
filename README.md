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
