import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { ProductCart } from './ProductCart';

describe('Product Cart page with quantity management', () => {
    beforeAll(async() => {
        global.fetch = vi.fn((url) =>
            Promise.resolve({
                json: () => Promise.resolve({"id":1,"products":[{"id":168,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.97,"discountPercentage":13.39,"discountedTotal":85743.87,"thumbnail":"https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"},{"id":78,"title":"Apple MacBook Pro 14 Inch Space Grey","price":1999.99,"quantity":2,"total":3999.98,"discountPercentage":18.52,"discountedTotal":3259.18,"thumbnail":"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"},{"id":183,"title":"Green Oval Earring","price":24.99,"quantity":5,"total":124.94999999999999,"discountPercentage":6.28,"discountedTotal":117.1,"thumbnail":"https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"},{"id":100,"title":"Apple Airpods","price":129.99,"quantity":5,"total":649.95,"discountPercentage":12.84,"discountedTotal":566.5,"thumbnail":"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"}],"total":103774.85,"discountedTotal":89686.65,"userId":33,"totalProducts":4,"totalQuantity":15}),
                ok: true,
                status: 200,
            })
        );
        
       })
        
  
  
   it('check increment quantity and check change of itemPrice & total price', async() => {
     render(<ProductCart />)
      waitFor(()=> {
          const cartItemQuantity= screen.getByTestId('quantity-168');
        expect(cartItemQuantity).toHaveTextContent("3");
        const cartItemPrice= screen.getByTestId('price-168');
        expect(cartItemPrice).toHaveTextContent("32999.99");
        const cartItemTotal= screen.getByTestId('total-price-168');
        expect(cartItemTotal).toHaveTextContent("98999.97");
        const totalPrice= screen.getByTestId('total-price');
        expect(totalPrice).toHaveTextContent("103774.85");
        const totalQuantity= screen.getByTestId('total-quantity');
        expect(totalQuantity).toHaveTextContent("15");
       
  
        const incrementButton = screen.getByTestId('increase-168');
        fireEvent.click(incrementButton);
        const cartItemQuantityAfter= screen.getByTestId('quantity-168');
        expect(cartItemQuantityAfter).toHaveTextContent("4");
         const cartItemPriceAfter= screen.getByTestId('price-168');
        expect(cartItemPriceAfter).toHaveTextContent("32999.99");
        const cartItemTotalAfter= screen.getByTestId('total-price-168');
        expect(cartItemTotalAfter).toHaveTextContent("131999.96");
        const totalPriceAfter= screen.getByTestId('total-price');
        expect(totalPriceAfter).toHaveTextContent("1,36,773.85");
        const totalQuantityAfter= screen.getByTestId('total-quantity');
        expect(totalQuantityAfter).toHaveTextContent("16");
        });
       
   });
   
   it('check decerement quantity and check change of itemPrice & total price', async() => {
     render(<ProductCart />)
      waitFor(()=> {
        const cartItemQuantity= screen.getByTestId('quantity-168');
        expect(cartItemQuantity).toHaveTextContent("3");
        const cartItemPrice= screen.getByTestId('price-168');
        expect(cartItemPrice).toHaveTextContent("32999.99");
        const cartItemTotal= screen.getByTestId('total-price-168');
        expect(cartItemTotal).toHaveTextContent("98999.97");
        const totalPrice= screen.getByTestId('total-price');
        expect(totalPrice).toHaveTextContent("103774.85");
        const totalQuantity= screen.getByTestId('total-quantity');
        expect(totalQuantity).toHaveTextContent("15");
       
   
        const incrementButton = screen.getByTestId('decrement-168');
        fireEvent.click(incrementButton);
        const cartItemQuantityAfter= screen.getByTestId('quantity-168');
        expect(cartItemQuantityAfter).toHaveTextContent("2");
         const cartItemPriceAfter= screen.getByTestId('price-168');
        expect(cartItemPriceAfter).toHaveTextContent("32999.99");
        const cartItemTotalAfter= screen.getByTestId('total-price-168');
        expect(cartItemTotalAfter).toHaveTextContent("131999.96");
        const totalPriceAfter= screen.getByTestId('total-price');
        expect(totalPriceAfter).toHaveTextContent("136,773.85");
        const totalQuantityAfter= screen.getByTestId('total-quantity');
        expect(totalQuantityAfter).toHaveTextContent("16");
      } )    
   })
 it('check remove cart item and check change of itemPrice & total price', async() => {
    render(<ProductCart />)
      waitFor(()=> {
        const cartItemQuantity= screen.getByTestId('quantity-168');
        expect(cartItemQuantity).toHaveTextContent("3");
        const cartItemPrice= screen.getByTestId('price-168');
        expect(cartItemPrice).toHaveTextContent("32999.99");
        const cartItemTotal= screen.getByTestId('total-price-168');
        expect(cartItemTotal).toHaveTextContent("98999.97");
        const totalPrice= screen.getByTestId('total-price');
        expect(totalPrice).toHaveTextContent("103774.85");
        const totalQuantity= screen.getByTestId('total-quantity');
        expect(totalQuantity).toHaveTextContent("15");
         const incrementButton = screen.getByTestId(' remove-item-168');
        fireEvent.click(incrementButton);
        const cartItemQuantityAfter= screen.getByTestId('quantity-168');
        expect(cartItemQuantityAfter).not.toBeInTheDocument();
       
      });
 });

})
