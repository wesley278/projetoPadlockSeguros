import Style from "../css/Header.module.css";
import logo2 from "../imagens/logo2.png";

function Header() {
  return (
    <div className="boxmain">
      <header className="boxheader">
        <div className={Style.boxlogo}>
          <img className={Style.logo} src={logo2} alt="logo da pagina" />
        </div>
        <nav>
          <div className={Style.boxmenu}>
            <p className={Style.links}>Home</p>
            <p className={Style.links}>Contato</p>
            <p className={Style.links}>Sobre Nós</p>
            <p className={Style.links}>Mais Seguros</p>
          </div>
        </nav>
        <div className={Style.boxcadastro}>
          <p className={Style.cadastro}>Contratar</p>
          <p className={Style.cadastro}>Login</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
