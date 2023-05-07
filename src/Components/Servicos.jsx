import style from "../css/Servicos.module.css";
function Servicos() {
  return (
    <div>
      <section className={style.section4}>
        <div>
          <h5>Oque oferecer nos nossos serviços</h5>
          <p className={style.pservicos}>
            Apreciado por superar consistentemente as expectativas do cliente e
            fornecer resultados excepcionais.
          </p>
        </div>
        <div className={style.boxservicos}>
          <div className={style.servicos1}>
            <p className={style.subtitulo}>Prioridade</p>
            <p className={style.textopriori}>
              A nossa prioridade é a <br/>satisfação do cliente no <br/>nosso serviços
            </p>
            <button className={style.agendar}>Agendar Atendimento </button>
          </div>
          <div className={style.servicos1}>
          <p className={style.subtitulo}>Atendimento</p>
            <p className={style.textopriori2}>
            Nosso atendimento esta em todo o lugar de são paulo,com todo apoio <br/>ao cliente em nossa plataforma e presencialmente
            </p>
            <button className={style.agendar2}>Agendar Atendimento </button>
          </div>
          <div className={style.servicos1}>
          <p className={style.subtitulo}>Empresa fisica</p>
            <p className={style.textopriori3}>
            Nossa empresa esta localizada 
em São paulo na Rua Tito 54, 
São Paulo, SP, 05051-000 ·
            </p>
            <button className={style.agendar3}>Agendar Atendimento </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Servicos;
