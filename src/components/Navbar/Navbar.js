import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/Logo.png'

export default function Navbar() {
    return (
        <div className={classes.container}>
            <div className={` grid wide ${classes.nav}`}>
                <img src={logo} />
                <p>BẢO THIÊN PHƯỚC</p>
            </div>

        </div>
    )
}
