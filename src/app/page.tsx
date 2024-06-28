import { TiShoppingCart } from "react-icons/ti";
import { LuShoppingBag } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

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


async function getProducts(){
    try{ 
        const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=price&orderBy=ASC")
        if(!response.ok){
            throw new Error(`Erro ao buscar os dados: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.log("Ocorreu um erro: ", error);
    }
}

export default async function Home(){
    const data = await getProducts();
    const products = data.products;
    console.log(products)
    return (
        <>
        <header>
            <h1 className="title-brand">MKS<span>Sistemas</span></h1>
            <button className="cart-btn"  aria-label="Open Cart" data-count="0">
                <TiShoppingCart /> 0
            </button>
        </header>
        <main>
            <div className="product-list">
                {products.map((product:Product) => (
                    <div className="product" key={product.id}>
                        <div className="product__info">
                            <img className="product__img" src={product.photo} />
                            <div className="product__wrapper">
                                <h3 className="product__title">{product.name}</h3>
                                <p className="product__price">{product.price}</p>
                            </div>
                            <p className="product__description">{product.description}</p>
                        </div>
                        <button className="product__btn"><LuShoppingBag /> Comprar</button>
                    </div>
                ))}
            </div>
        </main>
        <footer>
            <p className="copyright">MKS sistemas © Todos os direitos reservados</p>
        </footer>
        </>
    );
}