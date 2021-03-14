import CartItem from "../../components/cart-item/cart-item.component";

export const updateCartWithItems=(cartItems,item)=>{
    //console.log(item);
    const existingItem=cartItems.find(cartItem=>((cartItem.id===item.id)&&(cartItem.name===item.name)));
    if(existingItem){
        return cartItems.map(cartItem=>
            (cartItem.id===item.id && cartItem.name===item.name)?
            {...cartItem, quantity:cartItem.quantity+1}:
            {...cartItem}        
        )}
    //console.log(item);
    return [...cartItems, {...item,quantity:1}]
};

export const removeAndUpdateCart=(cartItems,item)=>{
    const itemExist=cartItems.find(cartItem=>((cartItem.id===item.id)&&(cartItem.name===item.name)));
    if(itemExist.quantity==1){
        return cartItems.filter(cartItem=>((cartItem.id!=item.id)||(cartItem.name!=item.name)));
    }
    return cartItems.map(cartItem=>
        (cartItem.id===item.id && cartItem.name===item.name)?
        {...cartItem,quantity:cartItem.quantity-1}:
        {...cartItem}
    )
}
