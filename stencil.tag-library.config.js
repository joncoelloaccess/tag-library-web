const sass = require("@stencil/sass");

exports.config = {
  namespace: "tag-library",
  outputTargets: [{ type: "dist" }],
  generateDocs: true,
  srcDir: "src",
  plugins: [sass()],
  copy: [
    // { src: "../cdn/dockerfile", dest: "../dockerfile" },
    // { src: "../cdn/package.json", dest: "../package.json" }
  ]
};
