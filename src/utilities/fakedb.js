// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getJobCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}


const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}


export {
    addToDb,
    getJobCart,
    
}
