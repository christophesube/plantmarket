import "./Plantpic.css";

type Props = {
  img: string;
  price: number;
};

const Plantpic = ({ img, price }: Props) => {
  return (
    <div className='plantpic__container'>
      <span className='plant__price'>{price}€ </span>
      <img className='big' src={img} alt='monstera picture' />
    </div>
  );
};

export default Plantpic;
