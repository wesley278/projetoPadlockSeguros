import style from "../css/Mobile.module.css";
import app from "../imagens/app.png";
import google from "../imagens/google.png";
import ipison1 from "../imagens/ipison1.png";
import ipison2 from "../imagens/ipison2.png";
import ipison3 from "../imagens/ipison3.png";
import ipison4 from "../imagens/ipison4.png";
function Mobile() {
  return (
    <div>
      <section className={style.section3}>
        <div className={style.boxtextomobile}>
          <h4>
            Entre em <span>contato</span> conosco pela nossa plataforma mobile
          </h4>
          <p className={style.ptextomobile}>
            Estamos em todos os lugares, venha ter uma vida mais segura com
            Padlock Seguros
          </p>
          <div className={style.mobile}>
            <img className={style.play_store} src={app} alt="" />
            <span className={style.OU}>OU</span>
            <img className={style.play_store} src={google} alt="" />
          </div>
        </div>
        <div className={style.boximgcelular}></div>
      </section>
      <div className={style.boxparceiros}>
        <img className={style.ipison} src={ipison1} alt="" />
        <img className={style.ipison} src={ipison2} alt="" />
        <img className={style.ipison} src={ipison3} alt="" />
        <img className={style.ipison} src={ipison4} alt="" />
      </div>
    </div>
  );
}
export default Mobile;
