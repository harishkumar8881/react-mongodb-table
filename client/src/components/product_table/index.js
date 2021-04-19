import React, { useEffect } from 'react';
import { Constants } from '../../constants';
import './style.css';

export default function ProductTable(props) {

    useEffect(()=> {
    }, []);

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>ProductImage</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    console.log(product);
                    return(
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td><img src={`${Constants.public_url}${product.productImage}`} alt="product" width='128' height='128' /></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
