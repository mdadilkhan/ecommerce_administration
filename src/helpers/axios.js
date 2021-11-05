//i am using axios file bec i want to create a centralized api

import axios from 'axios';
import { api } from '../urlConfig';
const axiosInstace=axios.create({
    baseURL: api
    // headers: {
    //     'authorization': ''
    // }
});

export default axiosInstace;