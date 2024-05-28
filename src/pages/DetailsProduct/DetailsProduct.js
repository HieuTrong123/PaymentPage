import React from 'react'
import classes from './DetailsProduct.module.css'
import InfoITem from '../../components/InfoItem/InfoITem'
import Button from '../../components/Button/Button'
import ThienTrang from '../../assets/ThienTrang.png'
import { Link } from 'react-router-dom'
export default function DetailsProduct() {
    const detailsInfo = {
        info: {
            name: "Áo sơ mi barber kaki thun màu đen",
            material: "Cotton",
            color: "#12545",
            print: "Có / Không + Vị trí",
            Rent: "Có / Không + Vị trí",
            quantity: 10,
        },
        total: {
            price: "1,780,000",
            deposit: "890,000"
        }
    }
    return (
        <div className={classes.box_padding}>

            <div className={`grid wide ${classes.container}`}>
                <div className={classes.head}>
                    <h1>Chi tiết sản phẩm</h1>
                    {/* {
                stateDetais ? (<p onClick={SetDetails}>Ẩn</p>) : (<p onClick={SetDetails}>Xem</p>)
            } */}

                </div>
                <div className={`${classes.listInfoOn}`}>
                    <ul className={classes.listInfo}>

                        <InfoITem title="Tên sản phẩm" content={detailsInfo.info.name} />
                        <InfoITem title="Chất liệu" content={detailsInfo.info.material} />
                        <InfoITem title="Màu sắc" content={detailsInfo.info.color} />
                        <InfoITem title="In" content={detailsInfo.info.print} />
                        <InfoITem title="Thêu" content={detailsInfo.info.Rent} />
                        <InfoITem title="Số lượng" content={detailsInfo.info.quantity} />
                        <InfoITem darkColor={true} title="Tổng tiền" content={detailsInfo.total.price} />
                        <InfoITem darkColor={true} title="Cọc ( %50)" content={detailsInfo.total.deposit} />
                    </ul>
                    <div className={classes.box_btn}>
                        <Link to={'/'}>

                            <Button className={classes.btn}>
                                Trở về
                            </Button>
                        </Link>
                    </div>
                    <div className={classes.box_img}>
                        <img className={classes.img} src={ThienTrang} />
                    </div>
                </div>

            </div>
        </div>
    )
}
