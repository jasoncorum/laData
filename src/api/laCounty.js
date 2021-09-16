import axios from 'axios';

export default axios.create({
  baseURL: 'https://data.lacity.org/resource/63jg-8b9z.json?$limit=5'
});
