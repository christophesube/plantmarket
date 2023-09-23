import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer__background'>
      <p>Pour les passionné.e.s de plantes</p>
      <form>
        <label htmlFor='email'>Laissez nous votre email :</label>
        <input type='email' id='email' placeholder='votre email' />
      </form>
    </footer>
  );
};
export default Footer;
