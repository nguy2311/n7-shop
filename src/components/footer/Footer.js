import React from 'react';
import './Footer.css'
import {FacebookOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";


function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-name">
                    <h2>n7 🙈 shop</h2>
                </div>
                <div className="footer-top">
                    <div className="footer-top-contact">
                        <p>Địa chỉ: Phòng 305, tầng 3, tòa A2</p>
                        <p>96A Trần Phú, Phường Mộ Lao, Quận Hà Đông, Thành phố Hà Nội</p>
                        <p>Chăm sóc khách hàng: 0888666868</p>
                        <p>Email: n7ptpmhdvptit@gmail.com</p>
                    </div>
                    <div className="footer-top-about">
                        <h2>about</h2>
                        <ul>
                            <li>
                                <a>Về Chúng Tôi</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Cơ Hội Nghề Nghiệp</a>
                            </li>
                            <li>
                                <a>Cửa Hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-top-sp">
                        <h2>Always-on Support</h2>
                        <p>Support 028.71.087.088 (07:00-21:00)</p>
                        <p>Delivery 1800 6936 (07:00-21:00)</p>
                    </div>
                    <div className="footer-top-delivery">
                        <h2>Delivery</h2>
                        <ul>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                            <li>
                                <a>Payment</a>
                            </li>
                            <li>
                                <a>Cash voucher</a>
                            </li>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    <div>Copyright © 2020 N7 🙈 shop. All rights reserved.</div>
                    <div className="footer-contact">
                        <TwitterOutlined></TwitterOutlined>
                        <InstagramOutlined></InstagramOutlined>
                        <FacebookOutlined></FacebookOutlined>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;