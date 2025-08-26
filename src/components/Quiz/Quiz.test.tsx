import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Product } from './Quiz'

describe('Product page with add to cart', () => {
    beforeEach(() => {
        global.fetch = vi.fn((url) =>
            Promise.resolve({
                json: () => Promise.resolve({ products: [{ "id": 1, "title": "Essence Mascara Lash Princess", "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", "category": "beauty", "price": 9.99, "rating": 2.56 },{ "id": 2, "title": "Essence Mascara Lash Princess", "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", "category": "beauty", "price": 9.99, "rating": 2.56 }] }),
                ok: true,
                status: 200,
            })
        );
     const getItemSpy = vi.spyOn(localStorage, 'getItem');
     getItemSpy.mockReturnValueOnce(JSON.stringify({"id":1,"title":"Essence Mascara Lash Princess","description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.","category":"beauty","price":9.99,"rating":2.56}));
    });
  it('renders the Product component with product cards', async() => {
    render(<Product />);
    await waitFor(() => {
       const titleElement = screen.getByTestId('title-0');
        expect(titleElement).toHaveTextContent("Essence Mascara Lash Princess");
        const priceElement = screen.getByTestId('price-0');
        expect(priceElement).toHaveTextContent("9.99");
        const ratingElement = screen.getByTestId('rating-0');
        expect(ratingElement).toHaveTextContent("2.56");
        const addToCartElement = screen.getByTestId('cart-0');
        expect(addToCartElement).toHaveTextContent("Add To Cart");
      });
    
  }),
   it('check the add to cart functionality with no duplicates', async() => {
    render(<Product />);
     await waitFor(() => {
        const addToCartElement = screen.getByTestId('cart-0');
        fireEvent.click(addToCartElement);
        const cartCountElement = screen.getByTestId('cart-count');
        expect(cartCountElement).toHaveTextContent("1");
        const addToCartElement2 = screen.getByTestId('cart-0');
        fireEvent.click(addToCartElement2);
        const cartCountElement2 = screen.getByTestId('cart-count');
        expect(cartCountElement2).toHaveTextContent("1");
        const addToCartElement3 = screen.getByTestId('cart-1');
        fireEvent.click(addToCartElement3);
        const cartCountElement3 = screen.getByTestId('cart-count');
        expect(cartCountElement3).toHaveTextContent("2");
     });
   })

})