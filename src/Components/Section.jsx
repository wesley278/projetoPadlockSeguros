import style from '../css/Section.module.css'
import telefone from '../imagens/telefone.png'
import email from '../imagens/email.png'
import coroa from '../imagens/coroa.png'
import personagems from '../imagens/personagems.png'
import mapa from '../imagens/mapa.png'
import estrela from '../imagens/estrela.png'
function Section() {
    return (
        <main>
      <section className={style.boxsection}>
       <div className={style.boxtexto}>
            <h1>Olá, eu sou Padlock Seguros</h1>
            <p  className={style.ptexto}>Desde 2010, ajudei mais de 1.500 clientes a deixar suas vidas muitos mais seguras. Ofereço aos clientes uma experiência personalizada na hora de cuidar das suas principais coisas, como guardando o seus imóveis, carros e muito mais.</p>
            <div className={style.boxcontato}>
            <img className={style.imgcontato} src={telefone} alt="" />
            <p className={style.pnumero}>11 99999-9999</p>
            <img className={style.imgcontato} src={email} alt="" />
            <p className={style.pemail}>hello@example.com</p>
            </div>
       </div>

        <div className={style.boximg1}>
      
        </div>
      </section>
      <div className={style.boxbeneficios}>
         <div className={style.boxbene}>
            <div className={style.boximgbene}>
             <img className={style.imgbaner} src={coroa} alt="" />
             <p className={style.pdetalhe}>axauowcwbcucbwcc</p>
            </div>
         </div>

         <div className={style.boxbene}>
            <div className={style.boximgbene}>
             <img className={style.imgbaner} src={personagems} alt="" />
             <p className={style.pdetalhe}>axauowcwbcucbwcc</p>
            </div>
         </div>

         <div className={style.boxbene}>
            <div className={style.boximgbene}>
             <img className={style.imgbaner} src={mapa} alt="" />
             <p className={style.pdetalhe}>axauowcwbcucbwcc</p>
            </div>
         </div>

         <div className={style.boxbene}>
            <div className={style.boximgbene}>
             <img className={style.imgbaner} src={estrela} alt="" />
             <p className={style.pdetalhe}>axauowcwbcucbwcc</p>
            </div>
         </div>
      
      </div>
      </main>
    );
  }
  
  export default Section;
  