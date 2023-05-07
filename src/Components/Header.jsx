import Style from "../css/Header.module.css";
import logo from "../imagens/logo.png";
function Header() {
  return (
    <div className="boxmain">
      <header className="boxheader">
        <div className={Style.boxlogo}>
          <img src={logo} alt="logo da pagina" />
        </div>
      </header>
    
    </div>
  );
}

export default Header;
