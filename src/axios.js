import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api'; // INPUT_REQUIRED {Ensure this URL is correct for the environment}

export default axios;
