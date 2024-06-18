import React, { useState, useEffect } from 'react';
import classes from './PaymentPage.module.css'
import Button from '../../components/Button/Button'
import ThienTrang from '../../assets/ThienTrang.png'
import QR from '../../assets/QR.png'
import NganHang from '../../assets/NganHang.png'
import lamp from '../../assets/lamp.png'
import InfoITem from '../../components/InfoItem/InfoITem'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useLocation } from 'react-router-dom';
import getOrder from './GetOrder.js'

const QRinfo = {
    BANKID: 'VPB',
    ACCOUNT_NO: 118833333,
    ACCOUNT_NAME: 'PHAN THỊ HẠNH'
}

export default function PaymentPage() {
    const [stateDetais, setsStateDetais] = useState(true)
    function SetDetails() {
        setsStateDetais(!stateDetais)
    }
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderHash = queryParams.get('order_hash');

    const [detailsInfo, setDetailsInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchOrder() {
            try {
                const data = await getOrder(orderHash);

                setDetailsInfo(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchOrder();
    }, [orderHash]);

    if (!orderHash) return "order_hash không hợp lệ";

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const {
        totalAccountAll, //tổng số tiền đã thanh toán ở đơn
        totalMoney, //tổng GTSP
        discount, //discound trước thuế
        totalVAT,
        totalMoneyAfterVATorDiscount,
        totalPay, //số tiền còn lại phải thanh toán
        customer,
    } = detailsInfo;
    const format = number => number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    const deposit = totalMoneyAfterVATorDiscount - totalPay;
    const depositRatio = Math.round(deposit / totalMoneyAfterVATorDiscount * 100);

    const totalAmountFormat = format(totalMoneyAfterVATorDiscount);
    const depositFormat = format(deposit);
    const VATFormat = format(totalVAT);
    const totalPayFormat = format(totalPay);

    const employeeName = [customer.assign.last_name, customer.assign.first_name].join(' ').trim()

    return (
        <div className={`${classes.Payment}`}>
            <div className={`l-8 c-12 ${classes.container}`}>
                <div className={classes.head}>
                    <h1 className='darkColor'>Thông tin đơn hàng</h1>
                    {
                        stateDetais ? (<p onClick={SetDetails}>Ẩn</p>) : (<p onClick={SetDetails}>Xem</p>)
                    }
                </div>
                <div className={stateDetais ? `${classes.listInfoOn}` : `${classes.listInfoOff}`}>
                    <ul className={classes.listInfo}>
                        <InfoITem title="Khách hàng" content={detailsInfo.customer.name} />
                        <InfoITem title="Nhân viên" content={employeeName} />
                        <InfoITem title="Số điện thoại" content={detailsInfo.customer.phone} />
                        <InfoITem title="Địa chỉ" content={detailsInfo.customer.address} />

                        <InfoITem darkColor={true} title="Tổng tiền" content={totalAmountFormat + ` (VAT: ${VATFormat})`} />
                        <InfoITem darkColor={true} title="Cọc" content={depositFormat + ` (${depositRatio}%)`} />
                        <InfoITem darkColor={true} title="Cần thanh toán" content={totalPayFormat} />
                    </ul>
                    <div className={classes.box_btn}>
                        <p className='darkColor'>Trạng thái</p>
                        <div>
                            <Button className={classes.btn_stt}>
                                Đang xử lý
                            </Button>
                            <a href='#QR' onClick={SetDetails}>
                                <Button className={classes.btn}>
                                    Thanh Toán
                                </Button>
                            </a>
                        </div>
                    </div>
                    {/* <div className={classes.box_img}>
                            <img className={classes.img} src={ThienTrang} />
                        </div> */}
                    {/* {totalPay > 0 && (
                        <p className='darkColor' style={{ textAlign: 'center', padding: '30px 0 10px 0' }}>
                            Lưu ý : Khánh hàng vui lòng thanh toán số tiền cọc theo đã ghi trong đơn hàng để hệ thống tiến hành duyệt đơn.
                        </p>
                    )} */}
                    <div className={classes.products}>
                        <h1 className='darkColor'>
                            Danh sách sản phẩm
                        </h1>
                        <div className={classes.product_list}>
                            {
                                detailsInfo.products.map((e, i) => (
                                    <>
                                        <ProductItem index={i} content={e} />
                                        <ProductItem index={i} content={e} />
                                        <ProductItem index={i} content={e} />
                                    </>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>

            {totalPay > 0 && ( // Đã thanh toán thì ẩn QR đi
                <div className={`l-4 c-12 ${classes.qrpay}`}>
                    <div id='QR' className={`${classes.container}`}>
                        <div className={classes.Payhead}>
                            {/* <img src={lamp} /> */}
                            <p className='darkColor'>
                                Mã QR thanh toán
                            </p>
                        </div>
                        <div className={`${classes.pay_container}`}>
                            <div className={` ${classes.box_QR}`}>
                                <img src={`https://img.vietqr.io/image/${QRinfo.BANKID}-${QRinfo.ACCOUNT_NO}-compact.png?amount=${totalPay}&addInfo=${detailsInfo.code + " Thanh toan don hang"}&accountName=${QRinfo.ACCOUNT_NAME}`} />
                            </div>
                            <div className=''>
                                <div className={classes.pay_container_right}>
                                    <div className={classes.bank}>
                                        <img src={NganHang} />
                                        <div>
                                            <p>
                                                Ngân hàng
                                            </p>
                                            <p className='darkColor'>
                                                VPBank - Ngân hàng TMCP Việt Nam Thịnh Vượng - 970432
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Chủ tài khoản:
                                        </p>
                                        <p className='darkColor'>
                                            {QRinfo.ACCOUNT_NAME}
                                        </p>
                                    </div>
                                    <div className={`row ${classes.box_flex}`}>
                                        <div className='col l-7 c-7'>
                                            <p>
                                                Số tài khoản:
                                            </p>
                                            <p className='darkColor'>
                                                {QRinfo.ACCOUNT_NO}
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
                                                {totalPayFormat}
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
                                                {detailsInfo.code}
                                            </p>
                                        </div>
                                        <div className={`col l-5 c-5 ${classes.box_btn_pay}`}>

                                            <Button className={classes.btn_pay}>Sao chép</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className={`row ${classes.note}`}>
                        <div className={`col l-6 c-12 ${classes.note_btn}`}>
                            <Button className={classes.btn_QR}>
                                Hủy
                            </Button>
                        </div>
                        <div className={`col l-6 c-12 ${classes.PayNote}`}>
                            <p>s
                                Lưu ý : Nhập chính xác số tiền
                            </p>
                            <span className='darkColor'>
                                {totalPayFormat}
                            </span>
                            <p>
                                , nội dung
                            </p>
                            <span className='darkColor'>
                                {detailsInfo.code}
                            </span>
                            <p>
                                khi chuyển khoản
                            </p>
                        </div>
                    </div> */}
                    </div>
                    <div className={`${classes.container} ${classes.transport}`}>
                        <p className='darkColor'>Vận chuyển và nhận hàng</p>
                        <p>
                            Mã vận chuyển :
                        </p>
                        <p>
                            Đơn vị vận chuyển :
                        </p>
                        <p>
                            Dự kiến nhận hàng :
                        </p>
                        <p>
                            Phí vận chuyển :
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
