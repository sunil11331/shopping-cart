import React from 'react';

const Items = ({description, title, img, price}) => {
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
                      <i class='fas fa-minus minus'></i>
                      <input type="text" placeholder="2" />
                      <i class='fas fa-plus add'></i>
                  </div>
                  <div className='price'>
                      <h1>{price}</h1>
                  </div>
                  <div className='remove-item'>
                  <i class='fas fa-trash-alt remove'></i>
                  </div>
              </div>

              <hr/>
  </>
  );
};

export default Items;
