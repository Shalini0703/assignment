import React, { Component } from 'react'
import Filter from './Filter';
import axios from 'axios';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             product : [],
             categories : [],
             brand : [],
             gender : [],
             filterProducts : [],
            
        }
        this.filter = [];
    }

    componentDidMount(){
        axios.get('https://demo7242716.mockable.io/products')
        .then(response => {
            this.cate = [];
            this.bran = [];
            this.gen = []
            for(let i = 0; i < response.data.products.length; i++){
                this.cate.push(response.data.products[i].category);
                this.bran.push(response.data.products[i].brand);
                this.gen.push(response.data.products[i].gender);
            }
            this.setState({
                product: response.data.products,
                filterProducts : response.data.products,
                categories: Array.from(new Set(this.cate)),
                brand : Array.from(new Set(this.bran)),
                gender : Array.from(new Set(this.gen))
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            this.filter.push(e.target.name);
            let filterProducts = [...this.state.filterProducts];
            filterProducts = this.state.product.filter((item) => {
                let found = false;
                for(let i = 0; i< this.filter.length; i++){
                    if(item.category === this.filter[i] || item.brand === this.filter[i] || item.gender === this.filter[i]){
                        return true;
                    }
                }
            })
            this.setState({
                filterProducts : filterProducts
            })
        })
    }


    
    render() {
        return (
            <React.Fragment>
                <div className = "Filter">
                    <Filter categories = {this.state.categories} gender = {this.state.gender} brand = {this.state.brand} change = {this.changeHandler}/>
                <div className = "Product">
                {
                    this.state.filterProducts.map((item,index) => {
                        return (
                            <div className = "Product-item" key = {index}>
                                <img src = {item.searchImage} alt = {item.brand} width = "100" height = "100"/>
                                <div>Brand : {item.brand}</div>
                                <div>Rating: {item.rating}</div>
                                <div>MRP: {item.mrp}</div>
                            </div>
                        )
                    })

                } 
                </div>
                </div>
            </React.Fragment>
        )
}
}

export default Display
