import React, { useState } from 'react'
import classes from './PaymentPage.module.css'
import Button from '../../components/Button/Button'
import ThienTrang from '../../assets/ThienTrang.png'
import QR from '../../assets/QR.png'
import NganHang from '../../assets/NganHang.png'
import lamp from '../../assets/lamp.png'
import InfoITem from '../../components/InfoItem/InfoITem'
import ProductItem from '../../components/ProductItem/ProductItem'

export default function PaymentPage() {
    const [stateDetais, setsStateDetais] = useState(true)
    function SetDetails() {
        setsStateDetais(!stateDetais)
    }
    const detailsInfo = {
        info: {
            customer_name: "Nguyễn Văn Anh",
            staff_name: "Nguyễn Văn Anh",
            phone: "09xxxxxxx",
            address: "60 Đ. ĐHT 32, Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh",

        },
        products: [
            {
                name: "Áo sơ mi barber kaki thun màu đen",
                count: 1,
                price: "500,000"
            },
            {
                name: "Áo sơ mi barber kaki thun màu đen",
                count: 1,
                price: "500,000"
            },
            {
                name: "Áo sơ mi barber kaki thun màu đen",
                count: 1,
                price: "500,000"
            }
        ],
        total: {
            price: "1,780,000",
            deposit: "890,000"
        }
    }
    return (
        <div className={classes.Payment}>
            <div className={`grid wide ${classes.container}`}>
                <div className={classes.head}>
                    <h1>Chi tiết đơn hàng</h1>
                    {
                        stateDetais ? (<p onClick={SetDetails}>Ẩn</p>) : (<p onClick={SetDetails}>Xem</p>)
                    }

                </div>
                <div className={stateDetais ? `${classes.listInfoOn}` : `${classes.listInfoOff}`}>
                    <ul className={classes.listInfo}>

                        <InfoITem title="Khách hàng" content={detailsInfo.info.customer_name} />
                        <InfoITem title="Nhân viên" content={detailsInfo.info.staff_name} />
                        <InfoITem title="Số điện thoại" content={detailsInfo.info.phone} />
                        <InfoITem title="Địa chỉ" content={detailsInfo.info.address} />
                        {
                            detailsInfo.products.map(e => (
                                <ProductItem title="Sản phẩm" content={e} />
                            ))
                        }
                        <InfoITem darkColor={true} title="Tổng tiền" content={detailsInfo.total.price} />
                        <InfoITem darkColor={true} title="Cọc ( %50)" content={detailsInfo.total.deposit} />
                    </ul>
                    <div className={classes.box_btn}>
                        <a href='#QR' onClick={SetDetails}>
                            <Button className={classes.btn}>
                                Thanh Toán
                            </Button>
                        </a>

                    </div>
                    {/* <div className={classes.box_img}>
                        <img className={classes.img} src={ThienTrang} />
                    </div> */}
                    <p className='darkColor' style={{ textAlign: 'center', padding: '30px 0 10px 0' }}>
                        Lưu ý : Khánh hàng vui lòng thanh toán số tiền cọc theo đã ghi trong đơn hàng để hệ thống tiến hành duyệt đơn.
                    </p>
                </div>

            </div>
            <div id='QR' className={`grid wide ${classes.container} ${classes.pay}`}>
                <div className={classes.Payhead}>
                    <img src={lamp} />
                    <div>
                        <p>Mở App Ngân hàng bất kỳ để </p>
                        <span className='darkColor'>
                            quét mã VietQR
                        </span>
                        <p>
                            hoặc
                        </p>
                        <span className='darkColor'>
                            chuyển khoản
                        </span>
                        <p>
                            chính xác số tiền, nội dung bên dưới
                        </p>
                    </div>
                </div>
                <div className={`row ${classes.pay_container}`}>
                    <div className={`col l-6 c-12 ${classes.box_QR}`}>
                        <img src={QR} />
                    </div>
                    <div className='col l-6 c-12'>
                        <div className={classes.pay_container_right}>
                            <div className={classes.bank}>
                                <img src={NganHang} />
                                <div>
                                    <p>
                                        Ngân hàng
                                    </p>
                                    <p className='darkColor'>
                                        Ngân hàng TMCP Công thương Việt Nam
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Chủ tài khoản:
                                </p>
                                <p className='darkColor'>
                                    DOAN THI THU THUONG
                                </p>
                            </div>
                            <div className={`row ${classes.box_flex}`}>
                                <div className='col l-7 c-7'>
                                    <p>
                                        Số tài khoản:
                                    </p>
                                    <p className='darkColor'>
                                        106873679492
                                    </p>
                                </div>
                                <div className={`col l-5 c-5 ${classes.box_btn_pay}`}>

                                    <Button className={classes.btn_pay}>Sao chép</Button>
                                </div>

                            </div>
                            <div className={`row ${classes.box_flex}`}>
                                <div className='col l-7 c-7'>
                                    <p>
                                        Số tiền:
                                    </p>
                                    <p className='darkColor'>
                                        2,000,000 vnd
                                    </p>
                                </div>
                                <div className={`col l-5 c-5 ${classes.box_btn_pay}`}>

                                    <Button className={classes.btn_pay}>Sao chép</Button>
                                </div>
                            </div>
                            <div className={`row ${classes.box_flex}`}>
                                <div className='col l-7 c-7'>
                                    <p>
                                        Nội dung:
                                    </p>
                                    <p className='darkColor'>
                                        CSPZLT740O9 Thanh toan don hang
                                    </p>
                                </div>
                                <div className={`col l-5 c-5 ${classes.box_btn_pay}`}>

                                    <Button className={classes.btn_pay}>Sao chép</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`row ${classes.note}`}>
                    <div className={`col l-6 c-12 ${classes.note_btn}`}>
                        <Button className={classes.btn_QR}>
                            Hủy
                        </Button>
                    </div>
                    <div className={`col l-6 c-12 ${classes.PayNote}`}>
                        <p>
                            Lưu ý : Nhập chính xác số tiền
                        </p>
                        <span className='darkColor'>
                            2,000
                        </span>
                        <p>
                            , nội dung
                        </p>
                        <span className='darkColor'>
                            CSPZLT740O9 Thanh toan don hang
                        </span>
                        <p>
                            khi chuyển khoản
                        </p>
                    </div>
                </div>
            </div>
        </div >

    )
}
