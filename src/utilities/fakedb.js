// use localStorage to manage cart data

const addToDb = (id) =>{
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

    // add quantity 
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity+1;
        // localStorage.setItem(id, newQuantity);
        shoppingCart[id] = newQuantity;
    }
    else{
        // localStorage.setItem(id,1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {addToDb}