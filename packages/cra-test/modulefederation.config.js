const deps = require('./package.json').dependencies;

module.exports = {
  name: process.env.REACT_APP_ID,
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  shared: {
   
    'react': {
      import: 'react', // the "react" package will be used a provided and fallback module
      singleton: true, // only a single version of the shared module is allowed
      requiredVersion: deps.react
    },
    'react-dom/client': {
      import: 'react-dom/client', // the "react" package will be used a provided and fallback module
      singleton: true, // only a single version of the shared module is allowed
      requiredVersion: deps["react-dom"]
    },
   '@prifina/hooks-v2': {
    import: '@prifina/hooks-v2'
  }  
  },
 
};
