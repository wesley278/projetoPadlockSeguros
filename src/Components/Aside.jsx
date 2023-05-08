import Style from "../css/Aside.module.css";
function Aside() {
  return (
    <div className="boxmain">
   
        <div className={Style.boxvideo}>
          <div className={Style.boxtextoh}>
          <p className={Style.htitulo}>Padlock Seguros</p>
        <p className={Style.hsubtiutlo}>Eu ofereço o melhor em Seguro de imobiliária. Porque você não merece menos.</p>
        <button className={Style.agendar}>Agendar Atendimento </button>
        </div>
        </div>
 
    </div>
  );
}

export default Aside;
