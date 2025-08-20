import React from 'react';
import "./ProductCart.css";
export type Props = {
    count:number
}

export const ProductCart:React.FC<Props> = ({count})=> {
    return(
    <div className="cart-badge">
         <button data-testid="cart-count">{count}</button>
    </div>);

}