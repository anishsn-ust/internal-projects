import { render, screen, waitFor } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { ProductCart } from './ProductCart';

global.fetch = vi.fn();
describe('Product Cart page with quantity management', () => {
    // beforeAll(async() => {
    //     global.fetch = vi.fn((url) =>
    //         Promise.resolve({
    //             json: () => Promise.resolve({"id":1,"products":[{"id":168,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.97,"discountPercentage":13.39,"discountedTotal":85743.87,"thumbnail":"https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"},{"id":78,"title":"Apple MacBook Pro 14 Inch Space Grey","price":1999.99,"quantity":2,"total":3999.98,"discountPercentage":18.52,"discountedTotal":3259.18,"thumbnail":"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"},{"id":183,"title":"Green Oval Earring","price":24.99,"quantity":5,"total":124.94999999999999,"discountPercentage":6.28,"discountedTotal":117.1,"thumbnail":"https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"},{"id":100,"title":"Apple Airpods","price":129.99,"quantity":5,"total":649.95,"discountPercentage":12.84,"discountedTotal":566.5,"thumbnail":"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"}],"total":103774.85,"discountedTotal":89686.65,"userId":33,"totalProducts":4,"totalQuantity":15}),
    //             ok: true,
    //             status: 200,
    //         })
    //     );
        
    //    })
  
   it('check product itemPrice & total price & shiiping charge', async() => {
        fetch.mockResolvedValueOnce({
        json: vi.fn().mockResolvedValueOnce({"id":1,"products":[{"id":168,"title":"Charger SXT RWD","price":32999.99,"quantity":3,"total":98999.97,"discountPercentage":13.39,"discountedTotal":85743.87,"thumbnail":"https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"},{"id":78,"title":"Apple MacBook Pro 14 Inch Space Grey","price":1999.99,"quantity":2,"total":3999.98,"discountPercentage":18.52,"discountedTotal":3259.18,"thumbnail":"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"},{"id":183,"title":"Green Oval Earring","price":24.99,"quantity":5,"total":124.94999999999999,"discountPercentage":6.28,"discountedTotal":117.1,"thumbnail":"https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"},{"id":100,"title":"Apple Airpods","price":129.99,"quantity":5,"total":649.95,"discountPercentage":12.84,"discountedTotal":566.5,"thumbnail":"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"}],"total":103774.85,"discountedTotal":89686.65,"userId":33,"totalProducts":4,"totalQuantity":15}),
        });
      render(<ProductCart />)
      await waitFor(()=> {
        
        const cartItemQuantity= screen.getByTestId('quantity-168');
        expect(cartItemQuantity).toHaveTextContent("3");
        const cartItemPrice= screen.getByTestId('price-168');
        expect(cartItemPrice).toHaveTextContent("32999.99");
        const cartItemDiscount= screen.getByTestId('discount-price-168');
        expect(cartItemDiscount).toHaveTextContent("325609.60");
        const cartItemTax= screen.getByTestId('tax-price-168');
        expect(cartItemTax).toHaveTextContent("8574.387");
        const cartItemShipping= screen.getByTestId('shipping-charge-168');
        expect(cartItemShipping).toHaveTextContent("25");
        const cartPayableAmount= screen.getByTestId('payable-charge-168');
        expect(cartPayableAmount).toHaveTextContent("94343.257");

        const totalPrice= screen.getByTestId('cart-price');
        expect(totalPrice).toHaveTextContent("98755.31");
        const totalQuantity= screen.getByTestId('cart-quantity');
        expect(totalQuantity).toHaveTextContent("15");
       
       
      });
       
   });
   

})
