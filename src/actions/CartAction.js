import axios from "axios";
import {BASE_URL_WEB} from "../constants/UserConstant";

export const AddToCart = (product) => async (dispatch) => {
    dispatch({type: 'ADD_TO_CART', payload: product})
}

export const AddProductToCart = (amount, product_id) =>async (dispatch) =>{
    try {
        const {data} = await axios.post(`${BASE_URL_WEB}/products/add_to_card`);
        dispatch({type: 'ADD_TO_CART', payload: data})
    }catch(error) {

    }
}

export const DeleteToCart = (product) => async (dispatch) => {
    dispatch({type: 'DELETE_TO_CART', payload: product})
}

export const DeleteQtyProduct = (product) => async (dispatch) => {
    dispatch({type: 'DELETE_QTY_PRODUCT', payload: product})
}

