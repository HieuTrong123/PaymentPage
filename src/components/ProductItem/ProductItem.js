import React from 'react'
import classes from './ProductItem.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
export default function ProductItem(props) {
    return (
        <li className={`row ${classes.infoItem}`}>
            <div className={`col l-6 c-6 ${classes.title}`}>
                <p>
                    {props.title}
                </p>
                <Link to={'/DetailsProduct'} className='l-0 c-12'>
                    <Button className={classes.btn}>
                        Chi tiết
                    </Button>
                </Link>
            </div>
            <div className={`col l-6 c-6 darkColor ${classes.content}`}>

                <p className='l-6 c-12'>
                    {props.content.name} x{props.content.count} x {props.content.price}
                </p>


                <div className={`l-6 c-12 ${classes.box_btn}`}>
                    <Link to={'/DetailsProduct'} className='l-4 c-0'>
                        <Button className={classes.btn}>
                            Chi tiết
                        </Button>
                    </Link>
                </div>

            </div>
        </li>
    )
}
