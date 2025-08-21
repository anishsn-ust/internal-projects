import React, { useEffect, useState } from 'react';
import type { ProductVO } from '../../model/product.model';
import "./ProductCartItem.css";

type Props = {
    item: ProductVO,
    manageQtyPrice:(changedQty: number,productPrice: number)=>void
    removeCartItem:(productId: number,quantityToRemove:number,totalPriceToReduce: number)=>void
}

export const ProductCartItem:React.FC<Props> = ({item, manageQtyPrice, removeCartItem})=> {

    let [quantityCount, setQuantityCount] = useState<number>(0);
    let [totalItemPrice, setTotalItemPrice] = useState<number>(0);
    useEffect(()=>{
        setQuantityCount(item.quantity);
        setTotalItemPrice(item.total);

    },[item.quantity]);
    const handleManageOtyPrice = (changedQty: number, productPrice: number) => {
        quantityCount = quantityCount + changedQty;
        totalItemPrice = totalItemPrice + (changedQty * productPrice);
        setQuantityCount(quantityCount);
        setTotalItemPrice(totalItemPrice);
        manageQtyPrice(changedQty,productPrice);
    }
   const handleRemoveCartItem = (productId:number)=> {
     removeCartItem(productId,quantityCount,totalItemPrice);
   }

    return (
        <div className='cart-item'  key={`cart-item-${item.id}`}>
            <div className='item-image'>
              <img src={item.thumbnail} ></img>
            </div>
                 
            <div  className='item-details'>
                <p data-testid={`title-${item.id}`}><b>Title:</b> {item.title}</p>
                <p data-testid={`price-${item.id}`}><b>Price:</b> {item.price}</p>
            </div>
            <div  className='item-quantity'>
                    <button data-testid={`increase-${item.id}`}key={`increase-${item.id}`} onClick={()=>handleManageOtyPrice(1,item.price)}>+</button>
                    <br></br>
                    <p data-testid={`quantity-${item.id}`}>{quantityCount}</p>
                    <br></br>
                    <button data-testid={`decrease-${item.id}`} disabled={quantityCount===1} key={`decrease-${item.id}`} onClick={()=>handleManageOtyPrice(-1,item.price)}>-</button>
            </div>
            <div  className='item-price'>
                <p  data-testid={`total-price-${item.id}`} key={`total-price-${item.id}`}>{totalItemPrice}</p>
                <br></br><br></br><br></br>
                <button data-testid={`remove-item-${item.id}`} key={`remove-item-${item.id}`} onClick={()=>handleRemoveCartItem(item.id)}>Remove</button>
            </div>
                 
               
          
        </div>);
    
}