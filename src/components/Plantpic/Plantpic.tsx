import "./Plantpic.css";

const Plantpic = ({ img, price }: { img: string; price: number }) => {
  return (
    <div className='plantpic__container'>
      <span className='plant__price'>{price}€ </span>
      <img className='big' src={img} alt='monstera picture' />
    </div>
  );
};

export default Plantpic;
