module.exports = {
  apps: [
    {
      name: "nse-server",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: true, // Enable watching file changes
      node_args: "--trace-warnings",
    },
  ],
};
