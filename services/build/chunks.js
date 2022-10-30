const { log } = require("./log");

function all(items, fn) {
  const promises = items
    .filter((item) => item)
    .map((item) => {
      if (item) {
        log(`${item.id}\n`, "yellow");
      }
      return fn(item);
    });
  return Promise.all(promises);
}

function chunks(items, fn, chunkSize = 25) {
  let result = [];
  const chunks = splitToChunks(items, chunkSize);
  const info = { total: items.length, chunkSize };

  return series(chunks, info, (chunk) => {
    return all(chunk, fn).then((res) => (result = result.concat(res)));
  }).then(() => {
    return result;
  });
}

function series(items, info, fn) {
  let result = [];
  log(
    `\nAggregating ${info.total} Manifest(s) in ${items.length} chunk(s)...\n`
  );
  return items
    .reduce((acc, item, index) => {
      acc = acc.then(() => {
        log(`\nChunk (${index + 1}/${items.length})\n`);
        return fn(item).then((res) => result.push(res));
      });
      return acc;
    }, Promise.resolve())
    .then(() => result);
}

function splitToChunks(items, size) {
  const result = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

module.exports = { chunks };