import React from 'react';
import type { ProductVO } from '../../model/product.model';
import "./ProductCartItem.css";

type Props = {
    item: ProductVO,
}

export const ProductCartItem:React.FC<Props> = ({item})=> {

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
                    <p data-testid={`quantity-${item.id}`}>{item.quantity}</p>
            </div>
            <div  className='item-price'>
                <p  key={`total-price-${item.id}`}><b>Total Price </b><span data-testid={`total-price-${item.id}`}>{item.total}</span></p>
                <p  key={`discounted-price-${item.id}`}><b>Discount Price </b><span data-testid={`discount-price-${item.id}`}>{(item.discountPercentage * item.total).toFixed(2)}</span></p>
                <p  key={`tax-price-${item.id}`}><b>Tax Price({item.taxPercentage}%) </b><span data-testid={`tax-price-${item.id}`}>{item.discountedTotal * (item.taxPercentage/100)}</span></p>
                <p  key={`shipping-charge-${item.id}`}><b>Shipping Charge </b><span data-testid={`shipping-charge-${item.id}`}>{item.shippingCharge}</span></p>
                <p  key={`payable-charge-${item.id}`}><b>Payable Amount </b><span  data-testid={`payable-charge-${item.id}`}>{item.payableAmount}</span></p>
            </div>
          
        </div>);
    
}