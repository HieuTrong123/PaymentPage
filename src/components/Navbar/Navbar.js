import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/Logo.png'
import Button from '../Button/Button'

export default function Navbar() {
    return (
        <div className={classes.container}>
            <div className={`grid wide ${classes.nav}`}>
                <div>
                    <img src={logo} />
                    <p>BẢO THIÊN PHƯỚC</p>
                </div>
                <Button className={classes.btn}>
                    Đã thanh toán
                </Button>
            </div>

        </div>
    )
}
