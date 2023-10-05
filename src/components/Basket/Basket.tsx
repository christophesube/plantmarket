import React from "react";
import "./Basket.css";

type basket = {
  name: string;
  itemPrice: number;
  totalPrice: number;
  quantity: number;
};

type Props = {
  btnBasket: boolean;
  basketContent: basket;
  setbtnOpenBasket: boolean;
  setBasketContent: React.Dispatch<React.SetStateAction<never[]>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
};

const Basket = ({
  btnBasket,
  setbtnOpenBasket,
  basketContent,
  setBasketContent,
  totalAmount,
  setTotalAmount,
}: Props) => {
  const defineStyle = () => {
    let styleBasket: string;
    if (!btnBasket) {
      return (styleBasket = "basket__container basket-close");
    }

    if (btnBasket) {
      return (styleBasket = "basket__container basket-open");
    }
  };

  const handleClickReset = () => {
    setTotalAmount(0);
    setBasketContent([]);
  };

  return (
    <aside className={defineStyle()}>
      <span
        className='close__button'
        onClick={() => {
          setbtnOpenBasket(false);
        }}>
        Fermer
      </span>
      <div className='infos__container'>
        <h3>Panier</h3>
        {basketContent.length === 0 ? <p>Votre panier est vide</p> : null}
        <ul>
          {basketContent.map((item) => {
            return (
              <li key={item.id}>
                {item.quantity} x {item.name}({item.itemPrice}€) -{" "}
                {item.totalPrice} €
              </li>
            );
          })}
        </ul>
        <h3>Total : {totalAmount} €</h3>
        <button
          className='basket-clear'
          onClick={() => {
            handleClickReset();
          }}>
          Vider le panier
        </button>
      </div>
    </aside>
  );
};

export default Basket;
