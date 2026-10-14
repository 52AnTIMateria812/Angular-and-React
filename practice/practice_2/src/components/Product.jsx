import React from 'react';

function Product({ title, price, discount = 0 }) {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <article className="product">
      <h3>{title}</h3>
      <p className="product-price">{discountedPrice.toLocaleString('ru-RU')} ₽</p>
      {discount > 0 && (
        <p className="product-discount">
          <s>{price.toLocaleString('ru-RU')} ₽</s>
          <span>Скидка: {discount}%</span>
        </p>
      )}
    </article>
  );
}

export default Product;
