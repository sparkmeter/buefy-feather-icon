import _Vue, { PluginObject } from "vue";

// Import vue component
import component from "@/buefy-feather-icon.vue";
import { setAliases } from "./config";
import type  { IconAliases } from "./config";

export type BuefyFeatherIconConfig = { aliases: IconAliases };

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & PluginObject<BuefyFeatherIconConfig>;

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/ ((): InstallableComponent => {
  // Assign InstallableComponent type
  const installable = (component as unknown) as InstallableComponent;

  // Attach install function executed by Vue.use()
  installable.install = (Vue: typeof _Vue, options?: BuefyFeatherIconConfig) => {
    if (options?.aliases) {
      setAliases(options.aliases);
    }
    Vue.component("BuefyFeatherIcon", installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
