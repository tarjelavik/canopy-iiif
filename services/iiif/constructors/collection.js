const axios = require("axios");
const { getPresentation3 } = require("../context");
const { getHomepageBySlug } = require("../homepage");
const MANIFESTS = require("@/.canopy/manifests.json");
const { getRepresentativeImage } = require("../image");

async function createCollection(iiifResources, label = "") {
  const items = await getCollectionItems(iiifResources);
  const complete_items = await Promise.all(items.map(async ( resource) => await createItem(resource)))
  console.log(complete_items)
  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `http://localhost/featured`,
    type: "Collection",
    label: { none: [label] },
    items: complete_items,
  };
}

async function createItem(resource) {
  const { slug } = MANIFESTS.find((item) => item.id === resource.id);
  const thumbnail =  await getRepresentativeImage(resource, 2000);
  // console.log(thumbnail);
  return {
    id: resource.id,
    label: resource.label,
    thumbnail: thumbnail ? thumbnail : [],
    homepage: getHomepageBySlug(slug, resource.label),
  };
}

function getCollectionItems(iiifResources) {
  return Promise.all(
    iiifResources.map((id) =>
      axios.get(id).then((json) => getPresentation3(json.data))
    )
  );
}

module.exports = { createCollection };
