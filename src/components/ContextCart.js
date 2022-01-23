import React, {useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from './Products';
const ContextCart = () => {
    const[item, setItem] = useState(products);
  return (
  <>
    <header>
      <div className='continue-shopping'>
          <img src='/images/arow.png' alt='ar' className='arrow-icon'/>
          <h3>continue shopping</h3>
      </div>
      <div className='cart-icon'>
          <img src='/images/cart.jpg' alt='jh'/>
          <p>7</p>
      </div>
  </header>
  <section className='main-cart-section'>
      <h1>shopping Cart</h1>
      <p className='total-items'>you hava <span className='total-items-count'>7</span> items in shopping cart</p>
      <div className='cart-items'>
          <div className='cart-items-container'>
              <Scrollbars>
                 {
                     item.map((curItem) => {
                         return <Items key={curItem.id} {... curItem}/>
                     })
                 }
              </Scrollbars>
          </div>
      </div>
      <div className='card-total'>
          <h3>Cart Total : <span>22000rs</span></h3>
          <butto>checkout</butto>
      </div>
  </section>
  </>
  );
};

export default ContextCart;
