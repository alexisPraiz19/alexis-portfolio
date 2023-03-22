// Common component para reutilizar código
import MenuLi from '../common/MenuLi';

// Icons
import { FaLaptopCode } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

// Lógica TS 
import menu from '../../typescript/menu';
import changeLanguage from '../../typescript/language';


// Componente principal de exportación
export default function Menu(){
    return (
      <nav className = "menu">
        <figure className = "menu-icon_container">
          <FaLaptopCode/>
          <span className = "my-name">Alexis</span>
        </figure>

        <RxHamburgerMenu className = "hamburger-icon menu-icon" onClick={()=> menu()}/>
        
        {/* Menu Links */}
        <ul className = "menu-links">
          <li className = "close-icon menu-icon"><AiOutlineCloseCircle onClick={()=> menu()}/></li>

          <MenuLi link="home" href="#home" icon={<ImHome/>} dataValue="home"/>
          <MenuLi link="skills" href="#skills" icon={<AiFillFire/>} dataValue="skills"/>
          <MenuLi link="projects" href="#projects" icon={<AiOutlineProfile/>} dataValue="projects"/>
          <MenuLi link="about" href="#about" icon={<FaUser/>} dataValue="about"/>
          <MenuLi link="contact" href="#footer" icon={<AiOutlineMail/>} dataValue="contact"/>
          
          {/* Iconos de bandera para cambiar idioma de la página */}
          <li className="flag-icons">
            <button onClick={() => changeLanguage("es")}>
              <img src="./assets/icons/es.svg" alt="flag-icon" className="flag-icon" title="change to spanish"/>
            </button>
            
            <button onClick={() => changeLanguage("en")}>
              <img src="./assets/icons/us.svg" alt="flag-icon" className="flag-icon" data-language = "en" title="change to english"/>
            </button>
          </li>
        </ul>
      </nav>
    );
};