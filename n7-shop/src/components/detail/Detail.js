import React, {useEffect} from 'react';
import './Detail.css'
import DetailInfo from './DetailInfo'
import RateStar from './RateStar';
import {
    useParams
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct, getproductById} from '../../actions/ProductAction';
import CommentProduct from './CommentProduct';
import BlogContent from './BlogContent';
import image from "../image.jpg";

function Detail(props) {
    const dispatch = useDispatch()
    const {id} = useParams();
    // const detailProduct = useSelector(state => state.getProductById.product)
    const product = useSelector(state => state.allProduct.product);

    useEffect(() => {
        dispatch(getAllProduct())
        return () => {
            return []
        }
    }, [dispatch])
    const detailProduct  = product.data && product.data.find(product => product.id === Number(id));
    // useEffect(() => {
    //     dispatch(getproductById(id))
    // }, [dispatch])

    return (
        <section id="detail">
            {
                detailProduct ? (
                    <div className="detail">
                        <div className="detail-title">
                            <h2>{detailProduct.product_name}</h2>
                        </div>
                        <div className="detail-info">
                            <div className="detail-info-slide">
                                <div className="detail-info-slide-image">
                                    <img src={detailProduct.img}/>
                                </div>
                            </div>
                            <DetailInfo product={detailProduct}></DetailInfo>
                        </div>
                        {/* <div> */}
                        {/*    <BlogContent></BlogContent> */}
                        {/* </div> */}
                        {/* <div> */}
                        {/*    <RateStar></RateStar> */}
                        {/* </div> */}
                        {/* <div> */}
                        {/*    <CommentProduct></CommentProduct> */}
                        {/* </div> */}

                    </div>
                ) : ''
            }
        </section>
    );
}

export default Detail;