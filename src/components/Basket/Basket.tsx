import { useState } from "react";
import "./Basket.css";

const Basket: React.FC<{
  btnBasket: boolean;
  setbtnOpenBasket: boolean;
  basketContent: Array<object>;
  setBasketContent;
}> = ({ btnBasket, setbtnOpenBasket, basketContent, setBasketContent }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  let styleBasket;

  if (!btnBasket) {
    styleBasket = "basket__container basket-close";
  }

  if (btnBasket) {
    styleBasket = "basket__container basket-open";
  }

  const handleClickReset = () => {
    setTotalAmount(0);
    setBasketContent([]);
  };

  const handleCalcBasket = () => {
    const initValue = 0;
    setTotalAmount(
      basketContent.reduce((acc, item) => acc + item.totalPrice, initValue)
    );
  };

  return (
    <aside className={styleBasket}>
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
        <button
          className='basket-clear'
          onClick={() => {
            handleCalcBasket();
          }}>
          Calculer le panier
        </button>
      </div>
    </aside>
  );
};

export default Basket;
