import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/AoThun247.jpg'
import Button from '../Button/Button'
import zalo_icon from '../../assets/zalo_icon.png'
export default function Navbar() {
    return (
        <div className={classes.container}>
            <div className={`grid wide ${classes.nav}`}>
                <div>
                    <img src={logo} />

                </div>
                <p>
                    Lưu ý : Khánh hàng vui lòng xem kỹ lại thông tin đơn hàng. Nếu có sai sót vui vòng liên hệ số : 0123456789 hoặc nhấn biểu tượng zalo để được hỗ trợ
                </p>
                <img src={zalo_icon} />
            </div>

        </div>
    )
}
