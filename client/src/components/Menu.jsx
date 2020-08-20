import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {   } from 'reactstrap';
export default function Menu(){

    const [cats,setCats] = React.useState([]);
    const [prods,setProds]  = React.useState([]);
    React.useEffect(()=>{
        Axios.get("http://localhost:4000/catalog")
        .then((res)=>{
            setCats(res.data)
            
        })
        .catch(()=>{

        });
    },[]);

function eventhandler(){
    Axios.get("http://localhost:4000/product")
        .then((res)=>{
            setProds(res.data)
            
        })
        .catch(()=>{

        });
}
return <div>
<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="index.html">Simple Ecommerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-secondary btn-number">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <a className="btn btn-success btn-sm ml-3" href="cart.html">
                    <i className="fa fa-shopping-cart"></i> Cart
                </a>
            </form>
        </div>
    </div>
</nav>
<div className="container">
    <div className="row">
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="category.html">Category</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Sub-category</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-3">
            <div class="card bg-light mb-3">
                <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
                <ul class="list-group category_block">
                    { cats.map((item,index)=>{
                        return <li class="list-group-item" onClick={eventhandler}><a href="#">{item.title}</a></li>
                    })}
                </ul>
            </div>
        </div>    
        <div class="col">
            <div class="row">
               {prods.map((item,index)=>{
                return <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img class="card-img-top" src={item.imgSrc} alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title"><a href="product.html" title="View Product">{item.title}</a></h4>
                                <p class="card-text">{item.content}</p>
                            <div class="row">
                                <div class="col">
                                    <p class="btn btn-danger btn-block">{item.price}</p>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
               })}
            </div>
        </div>

    </div>
</div>

            
</div>
    
}