import "./Plantinfo.css";
import water from "../../../public/assets/water.svg";
import sun from "../../../public/assets/sun.svg";

const Plantinfo = ({
  watkey,
  sunkey,
  waterlevel,
  sunlevel,
  name,
  handleAddCart,
}) => {
  const waternb = [];
  const sunnb = [];
  for (let index = 0; index < waterlevel; index++) {
    waternb.push(
      <img key={watkey + "-" + index} src={water} alt='water image' />
    );
  }

  for (let index = 0; index < sunlevel; index++) {
    sunnb.push(<img key={sunkey + "-" + index} src={sun} alt='sun image' />);
  }

  return (
    <div className='plantinfo__container'>
      <h2>{name}</h2>
      <div className='picswater__container'>{waternb}</div>
      <div className='picssun__container'>{sunnb}</div>
      <button
        className='button-add'
        onClick={(e) => {
          handleAddCart(e.target);
        }}>
        Ajouter
      </button>
    </div>
  );
};

export default Plantinfo;
