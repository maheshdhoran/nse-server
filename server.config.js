module.exports = {
  apps: [
    {
      name: "nse-server",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: true, // Enable watching file changes
      log_file: "logs/combined.log", // Log file
      error_file: "logs/err.log", // Error log file
      out_file: "logs/out.log", // Output log file
      time: true, // Add timestamp in logs
      node_args: "--trace-warnings",
    },
  ],
};
