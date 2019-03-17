Error.stackTraceLimit = Infinity;

var testContext = require.context('../../src/tests/', true, /\.spec\.ts/);
console.log(testContext);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);