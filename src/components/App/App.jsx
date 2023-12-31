import { useEffect, useState } from "react";
import plants from "../../datas/plants.js";
import Basket from "../Basket/Basket.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Plantitem from "../Plantitem/Plantitem.jsx";

import "./App.css";
import React from "react";

function App() {
  const [btnOpenBasket, setbtnOpenBasket] = useState(false);
  const [basketContent, setBasketContent] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddCart = (e) => {
    const tempBasket = [...basketContent];
    const name = e.parentNode.firstChild.textContent;
    const itemPrice = parseInt(
      e.parentNode.previousSibling.firstChild.textContent.replace("€", "")
    );
    const totalPrice = 30;
    const item = { name, itemPrice, totalPrice, quantity: 0 };

    if (
      tempBasket.length === 0 ||
      tempBasket.find((item) => item.name === name) === undefined
    ) {
      item.name = name;
      item.itemPrice = itemPrice;
      item.totalPrice = itemPrice;
      item.quantity = 1;
      tempBasket.push(item);
    } else {
      const itemToChange = tempBasket.filter((item) => item.name === name);
      itemToChange[0].quantity = itemToChange[0].quantity + 1;
      itemToChange[0].totalPrice =
        itemToChange[0].quantity * itemToChange[0].itemPrice;
    }

    setBasketContent(tempBasket);
  };

  const handleCalcBasket = () => {
    const initValue = 0;
    setTotalAmount(
      basketContent.reduce((acc, item) => acc + item.totalPrice, initValue)
    );
  };

  useEffect(() => {
    handleCalcBasket();
  });

  return (
    <>
      <Header />
      <div className='global__container'>
        <span
          className='openBasket__button'
          onClick={() => {
            setbtnOpenBasket(true);
          }}>
          Ouvrir le panier
        </span>
        <main className='items__container'>
          {plants.map((plant) => (
            <div key={plant.id}>
              <Plantitem
                plant={plant}
                handleAddCart={handleAddCart}
                id={plant.id}
              />
            </div>
          ))}
        </main>
        <Basket
          btnBasket={btnOpenBasket}
          setbtnOpenBasket={setbtnOpenBasket}
          basketContent={basketContent}
          setBasketContent={setBasketContent}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
