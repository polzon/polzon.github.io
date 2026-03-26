

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6gT0x5jC.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Bz-HT6m8.js","_app/immutable/chunks/0mipC0A-.js"];
export const stylesheets = [];
export const fonts = [];
