import * as api from '../api';
import {AUTH} from '../constants/actionTypes';

export const googleLogin = (token) => async (dispatch) => {
  try {
    const {data} = await api.googleLogin(token);
    dispatch({type: AUTH, data});
  } catch (error) {
    console.log(error);
  }
}

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.signIn(formData);
    dispatch({type: AUTH, data});
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.signUp(formData);
    console.log(data);
    dispatch({type: AUTH, data});
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}