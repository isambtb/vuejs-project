import axios from 'axios';

const baseApiService = axios.create({
  baseURL: 'https://hello.dhstaging.net/api/sys/v1.0/',
  timeout: 10000,
  headers: {
    "x-dhauth-token": "notsupersecret_but_stillakindofpwd",
  }
});


interface IValidationError {
  id: number;
  code: number;
  name: string;
  created: string;
}

baseApiService.interceptors.response.use((response) => {
  return response;
}, (error) => {
  alert(error.response.data.validation_error.details[0].message);
});

export default baseApiService;
