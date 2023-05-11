import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct} from "../../../actions/ProductAction";

const Iphone = (props) => {
    const { category } = props;
    const dispatch = useDispatch()
    const [name, setName] = useState('AO');
    const products = useSelector(state => state.allProduct.product);
    const ao = products.filter(p => p.category_id === 2);

    useEffect(() => {
        dispatch(getAllProduct());
    }, [])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{category.name}</h2>
                {
                    ao ? (<ListProduct HotSaleProducts={handlePercentDiscount(ao)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Iphone;