type IconAliases = { [buefyName: string]: string };

// Default mappings from Buefy's font-awesome names to Feather's
let iconAliases: IconAliases = {
  information: "info",
  magnify: "search",
  times: "x",
};

/**
  * Update the mapping of Buefy's font-awesome icon names to named Feather icons.
  *
  * @param { object } aliases - the mapping of font-awesome icon names to Feather icon names.
  */
function setAliases(aliases: IconAliases) {
  iconAliases = {...iconAliases, ...aliases};
}

export { iconAliases, setAliases };
export type { IconAliases };
