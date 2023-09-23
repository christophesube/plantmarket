import { ReactEventHandler, useState } from "react";
import plants from "../../datas/plants.js";
import Basket from "../Basket/Basket.js";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Plantitem from "../Plantitem/Plantitem";

import "./App.css";

interface plant {
  id: number;
  name: string;
  pic: string;
  price: number;
  sun: number;
  water: number;
  sunkey: string;
  waterkey: string;
}

interface item {
  name: string;
  itemPrice: number;
  totalPrice: number;
  quantity: number;
}

function App() {
  const [btnOpenBasket, setbtnOpenBasket] = useState(false);
  const [basketContent, setBasketContent] = useState([]);

  const handleAddCart = (e: ReactEventHandler) => {
    const tempBasket = [...basketContent];
    const name: string = e.parentNode.firstChild.textContent;
    const itemPrice: number = parseInt(
      e.parentNode.previousSibling.firstChild.textContent.replace("€", "")
    );
    const totalPrice: number = 30;
    const item: item = { name, itemPrice, totalPrice, quantity: 0 };

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
      console.log(tempBasket);
    }

    setBasketContent(tempBasket);
  };

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
          {plants.map((plant: plant) => (
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
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
