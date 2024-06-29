"use client";

import {useEffect, useState} from "react";
import { API } from "../services/api";
import { LocalStorage } from "../services/localStorage";

import { TiShoppingCart } from "react-icons/ti";
import { LuShoppingBag } from "react-icons/lu";

import "../styles/page.css"


type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string
    price: number;
    createdAt: string,
    updatedAt: string,
}


export default function Home(){
    const [products, setProducts] = useState([]); 
    const [cartquantity, setCartQuantity] = useState(0);
    
    useEffect(() => {
        setCartQuantity(LocalStorage.getItemFromCart().length);
    }, []);
    
    useEffect( () => {
        async function fetchProducts(){
            const data = await API.getProducts();
            setProducts(data.products || []);
        }
        fetchProducts();
    }, []);

    async function addCart(productId:number) {
        const data = await API.getProducts();
        const products = data.products;
        const chosenProduct = products.find((product:Product) => product.id === productId);
        
        LocalStorage.saveToLocalStorage(chosenProduct);
        setCartQuantity(LocalStorage.getItemFromCart().length);
    }   

    return (
        <>
        <header>
            <h1 className="title-brand">MKS<span>Sistemas</span></h1>
            <button className="cart-btn"  aria-label="Open Cart" data-qtd={cartquantity}>
                <TiShoppingCart />
            </button>
        </header>
        <main>
            <section id="section-product">
                <div className="product-container">
                    <div className="product-list">
                        {products.map((product:Product) => (
                            <div className="product-item" key={product.id}  onClick={() => addCart(product.id)}>
                                <div className="product__info">
                                    <div className="product__img">
                                        <img  src={product.photo} alt={product.name}/>
                                    </div>
                                    <div className="product__wrapper">
                                        <h3 className="product__title">{product.name}</h3>
                                        <p className="product__price">R${Math.floor(product.price)}</p>
                                    </div>
                                    <p className="product__description">{product.description}</p>
                                </div>
                                <button className="product__btn"><LuShoppingBag /> Comprar</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <p className="copyright">MKS sistemas © Todos os direitos reservados</p>
        </footer>
        </>
    );
}

