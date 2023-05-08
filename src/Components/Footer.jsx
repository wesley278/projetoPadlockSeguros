import style from "../css/Footer.module.css";
import logofooter from "../imagens/minilogo.png";
import telefone from '../imagens/telefone.png'
import email from '../imagens/email.png'
function Footer() {
  return (
    <div>
      <div className={style.boxfundo}></div>
      <div className={style.boxfooter}>
        <div className={style.boxlogoicon}>
          <div className={style.boxlogofooter}>
            <img className={style.lgfooter} src={logofooter} alt="" />
          </div>
          <div className={style.icons}>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>

        <div className={style.boxlogoicon}>
          <div className={style.boxplataforma}>
            <p className={style.plataformaf}>Plataforma</p>
            <p className={style.homef}>Home</p>
            <p className={style.sobref}>Sobre nós</p>
            <p className={style.maisf}>Mais Seguros</p>
          </div>
        </div>

        <div className={style.boxlogoicon}>
        <p className={style.Contatof}>Contato</p>
        <div className={style.boximgsc}>
           <img className={style.imgconatosf} src={telefone} alt="" />
           <img className={style.imgconatosf} src={email} alt="" />
           </div>
           <div className={style.boxcontatotext}>
            <p>11 99999-9999</p>
            <p>hello@example.com</p>

           </div>
        </div>
      </div>
      
    </div>
  );
}
export default Footer;
