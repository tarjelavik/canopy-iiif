/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection: "https://iiif.bodleian.ox.ac.uk/iiif/collection/canonici",
  featured: [
    "https://iiif.bodleian.ox.ac.uk/iiif/manifest/24e5a942-2aa4-4b04-9023-77f2542b5f94.json",
  ],
  metadata: ["Language", "Place of Origin", "Materials"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection: "https://iiif.bodleian.ox.ac.uk/iiif/collection/canonici",
  featured: [
    "https://iiif.bodleian.ox.ac.uk/iiif/manifest/24e5a942-2aa4-4b04-9023-77f2542b5f94.json",
  ],
  metadata: ["Language", "Place of Origin", "Materials"],
};

exports.options = {
  search: {
    enabled: true,
    index: {
      metadata: {
        enabled: true,
        all: false, // by default, only entries with curated labels are indexed
      },
      summary: {
        enabled: false,
      },
    },
  },
  theme: {
    defaultTheme: "light", // "light" | "dark" | "system"
    toggleEnabled: false,
  },
};
