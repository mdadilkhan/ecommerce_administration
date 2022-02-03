//i am using axios file bec i want to create a centralized api

import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store'
import { authConstants } from '../actions/constants';

const token=window.localStorage.getItem('token');

const axiosInstace=axios.create({
    baseURL: api,
    headers: {
        'uthorization': token ? `Bearer ${token}` : ''
    }
});



axiosInstace.interceptors.request.use((req)=>{
    const {auth}=store.getState();
    if(auth.token){
        req.headers.authorization=`Bearer ${auth.token}`;
    }

    return req;
})



axiosInstace.interceptors.response.use(
  (res) => {
    return res;
  },(error) => {
    console.log(error.response);
    const { status } = error.response;
    if (status === 500) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default axiosInstace;