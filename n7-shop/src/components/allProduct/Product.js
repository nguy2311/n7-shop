import React from 'react';
import {formatPrice} from '../../untils/index'
import {message} from "antd";
import {useDispatch} from "react-redux";
import {AddProductToCart, AddToCart} from "../../actions/CartAction";

function Product(props) {
    const {product} = props;
    const dispatch = useDispatch();
    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
        });
    };

    const handleAddProduct = (product) => {
       dispatch(AddToCart(product));
       // dispatch(AddProductToCart(5, product.id));
        success()
    }

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product.id}>
                <img src={product.img}></img>
                <p className="hotsale-listproduct-product-name">{product.product_name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.price)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </a>
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            <div className="buy">
                <a href="/cart" onClick={() => handleAddProduct(product)}> Mua Ngay</a>
            </div>
        </div>
    );
}

export default Product;