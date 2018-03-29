const serve = require("serve");

const server = serve(`${__dirname}/dist`, {
  port: 3366,
  ignore: ["node_modules"],
  cors: true
});
