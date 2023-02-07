import axios, {
  AxiosInstance
} from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://dog.ceo/api',
});


export default axiosClient;
