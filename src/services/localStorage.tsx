
interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string
    price: number;
    createdAt: string,
    updatedAt: string,
}

const localStorageKey:string = "shoppingCart";

function getItemFromCart():Product[]{
    const shoppingCart = localStorage.getItem(localStorageKey);
    return shoppingCart ? JSON.parse(shoppingCart) : [];
}

function saveToLocalStorage(product:Product):void{
    const shoppingCart = getItemFromCart() || [];
    
    const productExists = shoppingCart.some(shoppingCartItem => shoppingCartItem.id === product.id)
    if(productExists){
        alert('O produto já está no carrinho');
    } else{
        shoppingCart.push(product);
        localStorage.setItem(localStorageKey, JSON.stringify(shoppingCart));
        alert("adicionado no carrinho :)");
    }
}
export const LocalStorage = {
    saveToLocalStorage,
    getItemFromCart,
}