import React from 'react'
import classes from './ProductItem.module.css'
import Button from '../Button/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import image from '../../assets/Product.png'
export default function ProductItem(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const addIndexToUrl = () => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('index', props.index);
        navigate(`/DetailsProduct?${searchParams.toString()}`);
    };

    return (
        <li className={`${classes.container}`}>

            <div className={classes.inf}>
                <img src={image} />
                <div>
                    <p className={`darkColor`}>
                        Tên sản phẩm: {props.content.name}
                    </p>
                    <p className={`darkColor`}>
                        Số lượng: {props.content.number}
                    </p>
                    <p className={`darkColor`}>
                        Giá: {props.content.money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                </div>
            </div>
            <Link to={'/DetailsProduct'}>
                <Button className={classes.btn}>
                    Xem Thêm
                </Button>
            </Link>
        </li>
    )
}
