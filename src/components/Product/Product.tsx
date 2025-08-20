import React, { useEffect, useState } from 'react';
import { ProductCart } from '../ProductCart/ProductCart';
import type { ProductVO } from '../../model/product.model';
import "./Product.css";

export const Product:React.FC = ()=> {

    const [products, setProducts] = useState<ProductVO[]>([]);
    let [cartCount, setCartCount] = useState<number>(0);

    useEffect(()=>{
        const fetchData = async()=> {
            try{
                const response = await fetch('https://dummyjson.com/products');
                const data= await response.json();
                setProducts(data.products);
            }
            catch(error){
                console.log("error", error)
            }
        }
        fetchData();
        let cartInStorage = localStorage.getItem("cart");
        let cardProducts = cartInStorage && JSON.parse(cartInStorage)||[];
        setCartCount(cardProducts.length);
        
    },[]);
    const handleAddToCart = (product: ProductVO)=> {
        let cartInStorage = localStorage.getItem("cart");
        let cardProducts = cartInStorage && JSON.parse(cartInStorage)||[];
        const isProductExistInCart = cardProducts?.find((productItem: ProductVO)=>productItem.id===product.id)? true: false;
        if(!isProductExistInCart) {
            setCartCount(++cartCount);
            cardProducts.push(product);
            localStorage.setItem("cart", JSON.stringify(cardProducts));
        }

    }

    return (
        <div className='container'>
            <ProductCart count={cartCount} ></ProductCart>
            <div className='product-container'>
                {products.map((product,index)=> (
                    <div className='product-card'>
                        <div  className='card-body'>
                            <p data-testid={`title-${index}`}><b>Title:</b> {product.title}</p>
                            <p data-testid={`rating-${index}`}><b>Rating:</b> {product.rating}</p>
                            <p data-testid={`price-${index}`}><b>Price:</b> {product.price}</p>
                        </div>
                        <div  className='card-action'>
                             <button data-testid={`cart-${index}`}key={`cart-${index}`} onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    </div>)
                )}
            </div>
        </div>);
    
}