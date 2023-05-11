import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)

const listCategory = [
    {
        id: 1,
        name: 'Ao'
    }, {
        id: 2,
        name: 'Quan'
    }, {
        id: 3,
        name: 'Quan'
    }, {
        id: 4,
        name: 'Quan'
    }, {
        id: 5,
        name: 'Quan'
    }
]
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            {
                listCategory.map((category) => <IPhone category={category}></IPhone>)
            }

            <Footer></Footer>
             <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;