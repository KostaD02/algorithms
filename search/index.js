const { linearSearch } = require("./linear-search");
const { binarySearch, binarySearchRecursive, metaBinarySearch, exponentialSearch } = require("./binary-search");
const { sentinelLinearSearch } = require("./sentinel-linear-search");
const { jumpSearch } = require("./jump-search");
const { ternarySearch } = require("./ternary-search");
const { fibonacciSearch } = require("./fibonacci-search");

module.exports = {
  linearSearch,
  binarySearch,
  binarySearchRecursive,
  sentinelLinearSearch,
  jumpSearch,
  ternarySearch,
  fibonacciSearch,
  metaBinarySearch,
  exponentialSearch
};
