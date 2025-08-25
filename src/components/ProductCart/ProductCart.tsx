import React, { useEffect, useState } from 'react';
import type { ProductVO } from '../../model/product.model';
import "./ProductCart.css";
import { ProductCartItem } from '../ProductCartItem/ProductCartItem';
import { CartSummary } from '../CartSummary/CartSummary';

export const ProductCart:React.FC = ()=> {

    const [cartItems, setCartItems] = useState<ProductVO[]>([]);
    let [cartItemCount, setCartItemCount] = useState<number>(0);
    let [cartTotalPrice, setCartTotalPrice]= useState<number>(0);

    const calculateCartTotal = (product: ProductVO)=>(product.discountedTotal + (product.discountedTotal * (product.taxPercentage/100) + product.shippingCharge));
    
    useEffect(()=>{
        const fetchCartDetails = async()=> {
                    try{
                        const response = await fetch('https://dummyjson.com/carts/1');
                        const data= await response.json();
                        data.products.forEach((product:ProductVO) => {
                            product.taxPercentage = 10;
                            product.shippingCharge = 25;
                            product.payableAmount = calculateCartTotal(product);
                            cartTotalPrice = cartTotalPrice +   product.payableAmount;
                        })
                        setCartItems(data.products);
                        setCartItemCount(data.totalQuantity);
                        setCartTotalPrice(cartTotalPrice);
                    }
                    catch(error){
                        console.log("error", error)
                    }
                }
                fetchCartDetails();
    },[]);

    return (
        <div className='container'>
           <div className='cart-item-container'>
            {
              cartItems.map((cartItem,index)=> (
                <ProductCartItem key={`cart-item-${index}`} item={cartItem} ></ProductCartItem>)
            )}
            </div>
           <CartSummary totalPrice={cartTotalPrice} totalQuantity={cartItemCount}></CartSummary>
        </div>);
    
}