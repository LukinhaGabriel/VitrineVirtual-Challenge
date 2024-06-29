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

export const API = {
    getProducts,
}