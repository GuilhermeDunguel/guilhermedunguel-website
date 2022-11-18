import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.thecatapi.com/',
  headers: {
    'x-api-key': 'live_ozvGwDEe1vnISB3p328TE5JfGRhuv3R5Hpp77FbKFRwV39K6oQ8AwjmKkkd6iS3u'
  }
});