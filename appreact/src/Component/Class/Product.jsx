import React, {Component} from 'react'

import './CSS/Product.css';
class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div className="box-stock">
                <h2>Nama Produk</h2>
                <img src="https://placeimg.com/640/480/animals/sepia" alt=""/>
                <p>Harga</p>
                <p>Stock</p>
                <button className="btn-click" >Beli</button>
                <p>status</p>
            </div>
        )
    }
}

export default Product;