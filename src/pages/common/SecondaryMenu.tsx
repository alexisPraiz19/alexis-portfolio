// Herramientas
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

// Icons
import { FaLaptopCode } from "react-icons/fa"
import { ImHome } from "react-icons/im";

// Lógica TS
import detailsLanguage from "../../typescript/readDetailsOf";
import changeLanguage from "../../typescript/language";

// Componente principal de exportación
export default function SecondaryMenu() {
  const { skill } = useParams();
  return (
    <div className="menu-read_container">
        <figure className="menu-icon_container">
            <FaLaptopCode className='menu-icon'/>
            <span className='my-name'>Alexis</span>
        </figure>

        <div className="change-language">
            <button><img src="./assets/icons/es.svg" alt="icon-es" onClick={e => changeLanguage("es")}/></button>
            <button><img src="./assets/icons/us.svg" alt="icon-us" onClick={e => changeLanguage("en")}/></button>
            <Link to="/" className="menu-link"><ImHome />home</Link>
        </div>
    </div>
  )
}
