
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
    const products = getItemFromCart() || [];
    products.push(product);
    localStorage.setItem(localStorageKey, JSON.stringify(products));
}

export const LocalStorage = {
    saveToLocalStorage,
    getItemFromCart,
}