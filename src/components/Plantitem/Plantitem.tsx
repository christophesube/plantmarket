import Plantinfo from "../Plantinfo/Plantinfo";
import Plantpic from "../Plantpic/Plantpic";
import "./Plantitem.css";

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

const Plantitem = ({
  plant,
  handleAddCart,
  handleCalcBasket,
}: {
  plant: plant;
}) => {
  return (
    <div className='plantitem__container'>
      <Plantpic img={plant.pic} price={plant.price} />
      <Plantinfo
        watkey={plant.waterkey}
        waterlevel={plant.water}
        sunlevel={plant.sun}
        sunkey={plant.sunkey}
        name={plant.name}
        handleAddCart={handleAddCart}
        handleCalcBasket={handleCalcBasket}
      />
    </div>
  );
};

export default Plantitem;
