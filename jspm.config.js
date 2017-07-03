SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jspm17/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "jspm17": {
      "main": "app.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.35",
    "font-awesome": "npm:font-awesome@4.7.0"
  },
  packages: {
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.35"
      }
    }
  }
});
