import "./CartSummary.css";
type Props = {
    totalPrice: number,
    totalQuantity: number
}

export const CartSummary:React.FC<Props> = ({totalPrice, totalQuantity})=> {
    return (
       totalQuantity > 0 && <div className="cart-summary">
        <p >Total Price: <span data-testid={`total-price`}>{totalPrice.toFixed(2)}</span></p>
        <p >Total Quantity: <span data-testid={`total-quantity`}>{totalQuantity}</span></p>
       </div>
    );

}