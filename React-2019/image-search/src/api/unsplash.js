// Axios vs Fetch
// Fetch is far more basic and requires you to do a lot of work that is built in with Axios
// Fetch is built-in, Axios is third party that's installed through npm

// npm install --save axios
// >>> axios@0.18.0
import axios from 'axios';

export default axios.create({

  // Getting the root url for the API's GET request
  baseURL: 'https://api.unsplash.com',

  // In app.js
  // params: { query: term }

  headers: {
    Authorization:
      // Client-ID <Access Key>
      'Client-ID 1cd861d9b6548e96e1dcc3700249f976905f55009dec4700da13b0981f4ba197'
  }
});
