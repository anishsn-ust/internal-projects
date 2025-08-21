import React, { useEffect, useState } from 'react';
import type { ProductVO } from '../../model/product.model';
import "./ProductCart.css";
import { ProductCartItem } from '../ProductCartItem/ProductCartItem';
import { CartSummary } from '../CartSummary/CartSummary';

export const ProductCart:React.FC = ()=> {

    const [cartItems, setCartItems] = useState<ProductVO[]>([]);
    let [cartItemCount, setCartItemCount] = useState<number>(0);
    let [cartTotalPrice, setCartTotalPrice]= useState<number>(0);

    useEffect(()=>{
        const fetchCartDetails = async()=> {
                    try{
                        const response = await fetch('https://dummyjson.com/carts/1');
                        const data= await response.json();
                        setCartItems(data.products);
                        setCartItemCount(data.totalQuantity);
                        setCartTotalPrice(data.total);
                    }
                    catch(error){
                        console.log("error", error)
                    }
                }
                fetchCartDetails();
               
        
    },[]);

    const manageQtyPrice = (changedQty: number,productPrice: number)=> {
      const subtotalPrice = cartTotalPrice + (changedQty * productPrice);
      const totalQuantity = cartItemCount + changedQty;
      setCartTotalPrice(subtotalPrice);
      setCartItemCount(totalQuantity)
    }
    const removeCartItem = (productId: number,quantityToRemove:number,totalPriceToReduce: number) =>  {
      const cartItemsAfterRemove = cartItems.filter(product=>product.id!==productId);
      setCartItems(cartItemsAfterRemove);
      const subtotalPrice = cartTotalPrice - totalPriceToReduce;
      const totalQuantity = cartItemCount - quantityToRemove;
      setCartTotalPrice(subtotalPrice);
      setCartItemCount(totalQuantity);
      
    }

    return (
        <div className='container'>
           <div className='cart-item-container'>
            {
              cartItems.map((cartItem,index)=> (
                <ProductCartItem key={`cart-item-${index}`} item={cartItem} manageQtyPrice={manageQtyPrice} removeCartItem={removeCartItem}></ProductCartItem>)
            )}
            </div>
           <CartSummary totalPrice={cartTotalPrice} totalQuantity={cartItemCount}></CartSummary>
        </div>);
    
}