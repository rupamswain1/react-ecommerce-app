
export const updateCartWithItems=(cartItems,item)=>{
    //console.log(item);
    const existingItem=cartItems.find(cartItem=>((cartItem.id===item.id)&&(cartItem.name===item.name)));
    if(existingItem){
        return cartItems.map(cartItem=>
            (cartItem.id===item.id && cartItem.name===item.name)?
            {...cartItem, quantity:parseInt(cartItem.quantity)+1}:
            {cartItem}        
        )}
    //console.log(item);
    return [...cartItems, {...item,quantity:1}]
};

