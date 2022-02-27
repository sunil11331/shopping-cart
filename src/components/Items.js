import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({id, description, title, img, price, quantity}) => {
    const {removeItem, increment, decrement} = useContext(CartContext);
  return (
  <>
        <div className='items-info'>
                  <div className='product-img'>
                      <img src={img} alt='hg'/>
                  </div>
                  <div className='title'>
                      <h2>{title}</h2>
                      <p>{description}</p>
                  </div>
                  <div className='add-minus-quantity'>
                      <i class='fas fa-minus minus'onClick={() => decrement(id)}></i>
                      <input type="text" placeholder={quantity} />
                      <i class='fas fa-plus add' onClick={() => increment(id)}></i>
                  </div>
                  <div className='price'>
                      <h1>{price}</h1>
                  </div>
                  <div className='remove-item'>
                  <i class='fas fa-trash-alt remove' onClick={() => removeItem(id)}></i>
                  </div>
              </div>

              <hr/>
  </>
  );
};

export default Items;
