export const swLibDemo = { name: 'sw-jscad', source: './lib-demo/index.js' }

// Structures
export const swStructureDemos = [
  { name: 'arches', source: './lib-demo/structures/arch-examples.js' },
  { name: 'columns', source: './lib-demo/structures/column-examples.js' },
  { name: 'entryways', source: './lib-demo/structures/entryway-examples.js' },
  { name: 'roofs', source: './lib-demo/structures/roof-examples.js' },
  { name: 'walls', source: './lib-demo/structures/wall-examples.js' },
  { name: 'buttress', source: './lib-demo/structures/buttress-examples.js' },
]

// Ornaments
export const swOrnamentDemos = [
  { name: 'foils', source: './lib-demo/ornaments/foil-examples.js' },
  { name: 'moulds', source: './lib-demo/ornaments/mould-examples.js' },
  { name: 'profiles', source: './lib-demo/ornaments/profile-examples.js' },
  { name: 'trim-family-aranea', source: './lib-demo/ornaments/trim-family-examples.js' },
]

// Etc
export const swLibDemos = [
  // { name: 'SW Models', source: './lib-demo/index.js' },
  { name: 'Candle Holder v2', source: './lib-demo/candle-holder/index.js' },
]

export const swLibraryDemos = [
  swLibDemo,
  ...swStructureDemos,
  ...swOrnamentDemos,
  ...swLibDemos
]

export const swModels = [
  // { name: 'PlaceholderProject1', source: './projects/index.js' },
  // { name: 'PlaceholderProject2', source: './projects/candle-holder/index.js' },
]
