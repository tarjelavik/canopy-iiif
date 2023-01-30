/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  label: { none: ["World War II Poster Collection"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22World%20War%20II%20Poster%20Collection%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/81a7cfb7-5c5e-4b69-9634-17df4aa91980?as=iiif",
  ],
  metadata: ["Creator", "Date", "Dimensions", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  label: { none: ["World War II Poster Collection"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22World%20War%20II%20Poster%20Collection%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/81a7cfb7-5c5e-4b69-9634-17df4aa91980?as=iiif",
  ],
  metadata: ["Creator", "Date", "Dimensions", "Subject"],
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
