import axios from "axios";

export const AddToCart = (product) => async (dispatch) => {
    dispatch({type: 'ADD_TO_CART', payload: product})
}

export const AddProductToCart = (amount, product_id) =>async (dispatch) =>{
    try {
        const {data} = await axios.post('https://linhnd-web-hdv.onrender.com/api/v1/products/add_to_card');
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

