import estrela from '../imagens/avaliacao.png'
import style from "../css/Avaliacao.module.css";
function Avaliacao() {
  return (
    <div>
      <section className={style.section2}>
        <div className={style.boxtextoavaliacao}>
          <h6>Depoimentos</h6>
          <h3>
            Avaliações de <br />
            clientes
          </h3>
          <p className={style.pavaliacao}>
            ao lado esta algumas avaliações de nossos clientes
          </p>
          <button className={style.bfaleconosco}>Fale Conosco</button>
        </div>

        <div className={style.boxclientes}>
          <div className={style.clientes}>
            <div className={style.boxminilogo}></div>
            <div className={style.boxfoto}></div>
            <p className={style.nomecliente}>
            Marcos Rocha
            </p>
            <p className={style.minitexto}>Muito bom o site e o atendimento, eu e minha familia agradece a toda atenção dos funcionarios.
            </p>
            <div className={style.estrela}>
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
            </div>
          </div>
          <div className={style.clientes}>
          <div className={style.boxminilogo}></div>
            <div className={style.boxfoto2}></div>
            <p className={style.nomecliente}>
            Gabriela Araujo
            </p>
            <p className={style.minitexto}>
                Amei o atendimento dessa empresa, recomendo muito. eu e meu esposo estamos muito
                satisfeito.
            </p>
            <div className={style.estrela}>
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
                <img src={estrela} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Avaliacao;
