import axios from 'axios'

export const login = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post('https://linhnd-web-hdv.onrender.com/api/v1/user/login', user)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data.data));
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAIL', payload: error.response.data.message});
    }
};


export const SignupUser = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post('https://linhnd-web-hdv.onrender.com/api/v1/user/create', user)
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
    try {
        const {data} = await axios.get('https://linhnd-web-hdv.onrender.com/api/v1/user/list')
        dispatch({type: 'GET_ALL_USER', payload: data})
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