module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-jsapps`
  extends: ['jsapps'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
};
