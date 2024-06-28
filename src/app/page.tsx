import { TiShoppingCart } from "react-icons/ti";
import { LuShoppingBag } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

import "../styles/page.css"

export default function Home(){
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
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Macbook Pro</h3>
                            <p className="product__price">R$2.499</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
                <div className="product">
                    <div className="product__info">
                        <img className="product__img" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" alt="Apple Watch Series 4 GPS" />
                        <div className="product__wrapper">
                            <h3 className="product__title">Apple Watch Series 4 GPS</h3>
                            <p className="product__price">R$399</p>
                        </div>
                        <p className="product__description">Redesigned from scratch and completely revised.</p>
                    </div>
                    <button className="product__btn"><LuShoppingBag /> Comprar</button>
                </div>
            </div>
        </main>
        <footer>
            <p className="copyright">MKS sistemas © Todos os direitos reservados</p>
        </footer>
        </>
    );
}