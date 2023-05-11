import axios from 'axios'
import {BASE_URL_WEB} from "../constants/UserConstant";
import jwt from 'jsonwebtoken';

export const login = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_WEB}/user/login`, user)
        const infoUser = await jwt.verify(String(data.data), "1234")
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: data});
        localStorage.setItem('userInfo', JSON.stringify({
            ...infoUser, accessToken: String(data.data)
        }));
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAIL', payload: error.response.data.message});
    }
};

export const SignupUser = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BASE_URL_WEB}/user/create`, user)
        localStorage.setItem('userInfo', JSON.stringify(data.data));
        dispatch({type: 'USER_SIGNUP_SUCCESS', payload: data});
        document.location.href = '/';
    } catch (error) {
    }
};

export const SignoutUser = (user) => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {}})
    document.location.href = '/';
};

export const getAllUser = () => async (dispatch, getState) => {
    const {
        userSignin: {userInfo},
    } = getState()
    try
        if (userInfo.role === 'admin') {
            const {data} = await axios.get(`${BASE_URL_WEB}/user/list`,
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.accessToken}`,
                    }
                })
            dispatch({type: 'GET_ALL_USER', payload: data.data})
        }
    } catch (error) {
        dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
    }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
    const {
        userSignin: {userInfo},
    } = getState()
    try {
        const {data} = await axios.delete(`http://localhost:4000/user/delete/${userId}`)
        dispatch({type: 'DELETE_USER', payload: data})
    } catch (error) {
        dispatch({type: 'DELETE_USER_FAIL', error: error.message})
    }
}